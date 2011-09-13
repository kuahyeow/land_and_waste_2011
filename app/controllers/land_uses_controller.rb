class LandUsesController < ApplicationController
  def index
    @lands = Land.order('region_id, land_type, year').all(:include => :region).group_by{|l| [l.region_id, l.land_type]}.map do |key, pair|
      pair.size == 2 ? pair : [nil, pair].flatten
    end

    # raise @lands.first.inspect
  end
end
