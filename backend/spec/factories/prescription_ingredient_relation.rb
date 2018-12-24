FactoryBot.define do
  factory :prescription_ingredient_relation do
    prescription
    ingredient
    percentage do
      Faker::Number.between(
        ingredient.minimum_percentage,
        ingredient.maximum_percentage
      )
    end
  end
end
