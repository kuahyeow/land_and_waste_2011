class Region < ActiveRecord::Base
  has_many :tonnages
  has_many :populations
  has_many :councils
  has_many :lands
end
