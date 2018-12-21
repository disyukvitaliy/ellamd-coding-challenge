class Prescription::IngredientRelationSerializer < ActiveModel::Serializer
  attributes :percentage
  belongs_to :ingredient
end
