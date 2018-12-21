class CreateFormulations < ActiveRecord::Migration[5.1]
  def change
    create_table :formulations do |t|
      t.text :name, null: false, index: { unique: true }
      t.timestamps
    end
  end
end
