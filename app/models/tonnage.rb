class Tonnage < ActiveRecord::Base
  belongs_to :region

  YEARS = ['1998', '2001/02', '2010']
end
