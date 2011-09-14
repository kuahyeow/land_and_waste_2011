class AddOfficialLandTypeToLands < ActiveRecord::Migration
  def self.up
    add_column :lands, :official_land_type, :string
  end

  def self.down
    remove_column :lands, :official_land_type
  end
end
