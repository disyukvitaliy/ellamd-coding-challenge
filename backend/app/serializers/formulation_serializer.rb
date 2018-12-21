class FormulationSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :ingredient_relations, serializer: Formulation::IngredientRelationSerializer
end
