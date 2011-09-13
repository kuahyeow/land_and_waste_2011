class AddRegionIdAndCouncilTypeToCouncils < ActiveRecord::Migration
  def self.up
    add_column :councils, :region_id, :integer
    add_column :councils, :council_type, :string
  end

  def self.down
    remove_column :councils, :region_id
    remove_column :councils, :council_type
  end
end
