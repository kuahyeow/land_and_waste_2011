class Region < ActiveRecord::Base
  has_many :tonnages
  has_many :populations
end
