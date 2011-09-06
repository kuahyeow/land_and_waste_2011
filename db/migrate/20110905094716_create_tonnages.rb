class CreateTonnages < ActiveRecord::Migration
  def self.up
    create_table :tonnages do |t|
      t.string :year
      t.integer :tonnes
      t.boolean :estimate
      t.integer :region_id

      t.timestamps
    end
  end

  def self.down
    drop_table :tonnages
  end
end
