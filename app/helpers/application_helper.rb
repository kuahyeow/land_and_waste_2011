module ApplicationHelper
  def show_region_link(region)
    link_to_if region.showable?, region.name, region_path(region)
  end

  def land_use_class(land)
    case land.land_type
    when 'annual cropland'
      'croplands'
    when 'perennial cropland'
      'croplands'
    when 'non-native grassland'
      'grasslands'
    when 'tussock or bare grassland'
      'grasslands'
    when 'woody grassland'
      'grasslands'
    when 'natural forest'
      'forests'
    when 'other'
      'other'
    when 'pre-1990 planted Forest'
      'forests'
    when 'new forest'
      'forests'
    when 'towns and cities'
      'settlements'
    when 'water'
      'wetlands'
    when 'wetlands'
      'wetlands'
    end
  end
end
