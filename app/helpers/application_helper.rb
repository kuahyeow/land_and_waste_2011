module ApplicationHelper
  def land_use_class(land)
    case land.land_type
    when 'Cropland - Annual'
      'croplands'
    when 'Cropland - Perennial'
      'croplands'
    when 'Grassland - High producing'
      'grasslands'
    when 'Grassland - Low producing'
      'grasslands'
    when 'Grassland - With woody biomass'
      'grasslands'
    when 'Natural Forest'
      'forests'
    when 'Other'
      'other'
    when 'Planted Forest - Pre-1990'
      'forests'
    when 'Post 1989 Forest'
      'forests'
    when 'Settlements'
      'settlements'
    when 'Wetland - Open water'
      'wetlands'
    when 'Wetland - Vegetated non forest'
      'wetlands'
    end
  end
end
