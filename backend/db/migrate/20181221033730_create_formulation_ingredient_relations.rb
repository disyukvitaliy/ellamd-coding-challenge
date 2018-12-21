class CreateFormulationIngredientRelations < ActiveRecord::Migration[5.1]
  def change
    create_table :formulation_ingredient_relations, id: false do |t|
      t.references :formulation,
        foreign_key: { name: :fk_formulation_ingredient_relations_on_formulation_id },
        index: false,
        null: false

      t.references :ingredient,
        foreign_key: { name: :fk_formulation_ingredient_relations_on_ingredient_id },
        index: false,
        null: false

      t.decimal :percentage, precision: 4, scale: 2, null: false

      t.index %i[formulation_id ingredient_id],
        name: :index_formulation_ingredients_on_formulation_id_ingredient_id,
        unique: true
    end
  end
end
