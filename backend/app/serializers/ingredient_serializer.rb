class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :minimum_percentage, :maximum_percentage, :description
end
