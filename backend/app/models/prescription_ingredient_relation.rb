class PrescriptionIngredientRelation < ApplicationRecord
  belongs_to :prescription
  belongs_to :ingredient

  validates :percentage, presence: true
  validates :percentage, numericality: { greater_than_or_equal: 0.0, less_than_or_equal: 100.0 }
end
