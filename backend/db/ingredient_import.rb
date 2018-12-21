require 'csv'

class IngredientImport
  def call
    return if Ingredient.exists?

    CSV.foreach(Rails.root.join('db', 'ingredients.csv')).to_a[1..-1].each do |row|
      Ingredient.create!(
        name: row[1],
        minimum_percentage: row[2],
        maximum_percentage: row[3],
        description: row[4],
      )
    end
  end
end