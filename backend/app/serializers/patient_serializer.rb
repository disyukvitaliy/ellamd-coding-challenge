class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :birthday
  has_many :prescriptions
end
