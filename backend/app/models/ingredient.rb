class Ingredient < ApplicationRecord
  validates :name, :minimum_percentage, :maximum_percentage, presence: true
  validates :minimum_percentage, :maximum_percentage,
    numericality: { greater_than_or_equal: 0.0, less_than_or_equal: 100.0 }
end
