class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false, index: { unique: true }
      t.decimal :minimum_percentage, precision: 4, scale: 2, null: false
      t.decimal :maximum_percentage, precision: 4, scale: 2, null: false
      t.text :description

      t.timestamps
    end
  end
end
