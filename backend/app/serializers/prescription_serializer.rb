class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id
  has_many :ingredient_relations, serializer: Prescription::IngredientRelationSerializer
end
