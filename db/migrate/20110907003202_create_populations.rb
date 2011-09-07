class CreatePopulations < ActiveRecord::Migration
  def self.up
    create_table :populations do |t|
      t.integer :region_id
      t.integer :number
      t.string :year

      t.timestamps
    end
  end

  def self.down
    drop_table :populations
  end
end
