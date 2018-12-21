class CreatePatients < ActiveRecord::Migration[5.1]
  def change
    create_table :patients do |t|
      t.string :name, null: false
      t.text :address, null: false
      t.datetime :birthday, null: false
      t.timestamps
    end
  end
end
