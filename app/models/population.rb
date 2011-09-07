class Population < ActiveRecord::Base
  belongs_to :region

  YEARS = ['1991', '1996', '2001', '2006', '2010']
end
