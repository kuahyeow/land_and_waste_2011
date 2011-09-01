# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

FasterCSV.foreach(File.join(RAILS_ROOT, 'db/councils.csv'), :headers => true, :header_converters => :symbol) do |council|
  Council.find_or_create_by_name(:name => council[:name], :website => council[:website])
end
