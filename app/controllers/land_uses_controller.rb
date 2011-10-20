class LandUsesController < ApplicationController
  def index
    @lands = Land.order('region_id, land_type, year').all(:include => :region).group_by{|l| [l.region_id, l.land_type]}.map do |key, pair|
      pair.size == 2 ? pair : [nil, pair].flatten
    end
  end

  def forest
    @region_tonnage = Tonnage.order(:year).all(:include => :region).group_by(&:region)
    @region_lands = Land.where('land_type = ?', 'natural forest').order(:year).all(:include => :region).group_by(&:region)
  end

  def changes_map
    @regions = Region.showable.all
  end
end
