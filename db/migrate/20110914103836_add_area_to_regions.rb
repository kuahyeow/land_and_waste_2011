class AddAreaToRegions < ActiveRecord::Migration
  def self.up
    add_column :regions, :area, :decimal
  end

  def self.down
    remove_column :regions, :area
  end
end
