require 'csv'

class FormulationIngredientImport
  def call
    return if FormulationIngredientRelation.exists?

    CSV.foreach(Rails.root.join('db', 'formulation_ingredients.csv')).to_a[1..-1].each do |row|
      FormulationIngredientRelation.create!(
        formulation_id: row[0],
        ingredient_id: row[1],
        percentage: row[2],
      )
    end
  end
end