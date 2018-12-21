class Formulation < ApplicationRecord
  validates :name, presence: true

  has_many :formulation_ingredient_relations
  has_many :ingredients, through: :formulation_ingredient_relations
end
