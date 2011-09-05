class CreateLandfills < ActiveRecord::Migration
  def self.up
    create_table :landfills do |t|
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :landfills
  end
end
