class Prescription < ApplicationRecord
  belongs_to :patient
  has_many :ingredient_relations, class_name: PrescriptionIngredientRelation.name
  has_many :ingredients, through: :ingredient_relations
end
