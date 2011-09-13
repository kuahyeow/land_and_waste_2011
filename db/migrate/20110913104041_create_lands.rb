class CreateLands < ActiveRecord::Migration
  def self.up
    create_table :lands do |t|
      t.integer :region_id
      t.string :year
      t.string :land_type
      t.decimal :hectares

      t.timestamps
    end
  end

  def self.down
    drop_table :lands
  end
end
