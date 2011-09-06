class InformationController < ApplicationController
  def index
    @region_tonnage = Tonnage.order(:year).all(:include => :region).group_by(&:region)
  end

end
