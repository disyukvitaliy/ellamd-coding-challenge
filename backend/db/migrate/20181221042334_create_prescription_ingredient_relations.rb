class CreatePrescriptionIngredientRelations < ActiveRecord::Migration[5.1]
  def change
    create_table :prescription_ingredient_relations, id: false do |t|
      t.references :prescription,
        foreign_key: { name: :fk_prescription_ingredient_relations_on_prescription_id },
        index: false,
        null: false

      t.references :ingredient,
        foreign_key: { name: :fk_prescription_ingredient_relations_on_ingredient_id },
        index: false,
        null: false

      t.decimal :percentage, precision: 4, scale: 2, null: false

      t.index %i[prescription_id ingredient_id],
        name: :index_prescription_ingredients_on_prescription_id_ingredient_id,
        unique: true
    end
  end
end
