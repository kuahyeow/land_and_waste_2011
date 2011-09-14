class Region < ActiveRecord::Base
  has_many :tonnages
  has_many :populations
  has_many :councils
  has_many :lands

  scope :showable, where('area is not null')   # I'm using area as a proxy to determine whether to show, hack FIXME

  def showable?
    area.present?
  end
end
