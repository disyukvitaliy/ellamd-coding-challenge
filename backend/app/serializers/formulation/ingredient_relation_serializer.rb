class Formulation::IngredientRelationSerializer < ActiveModel::Serializer
  attributes :percentage
  belongs_to :ingredient
end
