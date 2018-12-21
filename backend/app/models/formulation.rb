class Formulation < ApplicationRecord
  validates :name, presence: true

  has_many :ingredient_relations, class_name: FormulationIngredientRelation.name
  has_many :ingredients, through: :formulation_ingredient_relations
end
