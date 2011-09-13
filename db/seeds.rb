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

FasterCSV.foreach(File.join(RAILS_ROOT, 'db/regions.csv'), :headers => true, :header_converters => :symbol) do |region|
  Region.find_or_create_by_name(:name => region[:name])
end

reload_tonnages = false

if reload_tonnages
  puts "Reloading tonnage data.."
  Tonnage.where(:year => '1998').delete_all
  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/1998.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:region])
    raise "Not found #{data[:region]}" unless region
    Tonnage.create!(:year => '1998', :tonnes => data[:tonnes], :region => region, :estimate => false)
  end

  Tonnage.where(:year => '2001/02').delete_all
  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/2001.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:location])
    raise "Not found #{data[:region]}" unless region
    Tonnage.create!(:year => '2001/02', :tonnes => data[:tonnes], :region => region, :estimate => false)
  end

  Tonnage.where(:year => '2010').delete_all
  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/2010.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:region])
    raise "Not found '#{data[:region]}'" unless region
    Tonnage.create!(:year => '2010', :tonnes => data[:tonnes], :region => region, :estimate => false) if data[:tonnes]

    estimate = data[:estimated_total_regional_tyr_based_on_canterbury_167_tperson]
    Tonnage.create!(:year => '2010', :tonnes => estimate, :region => region, :estimate => true) if estimate
  end
end

reload_population = false

if reload_population
  puts "Reloading population data.."
  Population.delete_all
  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/population.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:region])
    raise "Not found #{data[:region]}" unless region
    Population.create!(:year => '1991', :number => data[:'1991_census'], :region => region)
    Population.create!(:year => '1996', :number => data[:'1996_census'], :region => region)
    Population.create!(:year => '2001', :number => data[:'2001_census'], :region => region)
    Population.create!(:year => '2006', :number => data[:'2006_census'], :region => region)
    Population.create!(:year => '2010', :number => data[:'2010_estimate'], :region => region)
  end
end

reload_lands = true

if reload_lands
  Land.delete_all
  puts "Reloading land use data.."
  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/2008_lum.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:lum_reg_n])
    raise "Not found #{data[:lum_reg_n]}" unless region
    Land.create!(:year => data[:lum_year], :land_type => data[:luc_name], :hectares => data[:sum], :region => region)
  end

  FasterCSV.foreach(File.join(RAILS_ROOT, 'db/1990_lum.csv'), :headers => true, :header_converters => :symbol) do |data|
    region = Region.find_by_name(data[:lum_reg_n])
    raise "Not found #{data[:lum_reg_n]}" unless region
    Land.create!(:year => data[:lum_year], :land_type => data[:luc_name], :hectares => data[:sum], :region => region)
  end
end


