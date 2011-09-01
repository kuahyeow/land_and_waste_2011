class CouncilsController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@councils = Council.all)
  end

  def show
    respond_with(@council = Council.find(params[:id]))
  end

end
