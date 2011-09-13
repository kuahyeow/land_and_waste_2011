class RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  def show
    @region = Region.find(params[:id], :include => [:tonnages, :populations])
    @regional_council = @region.councils.where(:council_type => ['unitary', 'regional']).first

    @forests = @region.lands.forest.order('year').all
  end
end
