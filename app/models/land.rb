class Land < ActiveRecord::Base
  belongs_to :region

  YEARS = ['1990', '2008']

  scope :forest, where(:land_type => 'Natural Forest')
end
