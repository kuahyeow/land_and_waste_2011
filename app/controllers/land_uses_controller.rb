class LandUsesController < ApplicationController
  def index
    @lands = Land.order('region_id, land_type, year').all(:include => :region).group_by{|l| [l.region_id, l.land_type]}.map do |key, pair|
      pair.size == 2 ? pair : [nil, pair].flatten
    end
  end

  def land_type
    @land_type = (params[:land_type] || 'Natural forest').humanize
    @short_type = @land_type.split(/\s/).last
    render(:text => 'Land type not found', :status => :not_found) and return if Land.where('land_type = ?', @land_type.downcase).count == 0
    @region_lands = Land.where('land_type = ?', @land_type.downcase).order(:year).all(:include => :region).group_by(&:region)
  end

  def changes_map
    @regions = Region.showable.all
  end
end
