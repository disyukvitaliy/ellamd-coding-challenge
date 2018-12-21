class Web::PrescriptionForm < BaseForm
  validates :ingredients, presence: true
  validate :ingredients_total_percentage
  validate :ingredients_percentage

  def ingredients=(ingredients)
    ingredients.each do |ingredient|
      object.ingredient_relations.new(
        ingredient_id: ingredient[:id],
        percentage: ingredient[:percentage]
      )
    end
  end

  def ingredients
    object.ingredient_relations
  end

  def ingredients_total_percentage
    return if object.ingredient_relations.empty?

    if object.ingredient_relations.map(&:percentage).map(&:to_f).reduce(&:+) > 100
      errors.add(:ingredients, 'Total percentage cant be more than 100%')
    end
  end

  def ingredients_percentage
    object.ingredient_relations.each do |relation|
      ingredient = relation.ingredient
      range = (ingredient.minimum_percentage..ingredient.maximum_percentage)
      unless range.cover?(relation.percentage.to_f)
        errors.add(:ingredients, "#{ingredient.name}'s have invalid percentage")
      end
    end
  end
end
