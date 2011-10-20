class Land < ActiveRecord::Base
  belongs_to :region
  before_validation :fill_in_land_type
  validates :land_type, :presence => true

  YEARS = ['1990', '2008']

  scope :forest, where(:land_type => 'natural forest')
  scope :largest, order('hectares desc')


  def square_kms
    @square_kms ||= hectares.to_f / 100
  end

  def per_region_area
    square_kms / region.area if region.area
  end

  def self.year_json(year)
    where(:year => year).all.inject(Hash.new){|hash, t| hash[t.region.name] = t.per_region_area; hash}.to_json
  end

  protected
  def fill_in_land_type
    self.land_type ||= land_use_class
  end

  def land_use_class
    case official_land_type
    when 'Cropland - Annual'
      'annual cropland'
    when 'Cropland - Perennial'
      'perennial cropland'
    when 'Grassland - High producing'
      'non-native grassland'
    when 'Grassland - Low producing'
      'tussock or bare grassland'
    when 'Grassland - With woody biomass'
      'woody grassland'
    when 'Natural Forest'
      'natural forest'
    when 'Other'
      'other'
    when 'Planted Forest - Pre-1990'
      'pre-1990 planted forest'
    when 'Post 1989 Forest'
      'new forest'
    when 'Settlements'
      'towns and cities'
    when 'Wetland - Open water'
      'water'
    when 'Wetland - Vegetated non forest'
      'wetlands'
    end
  end
end
