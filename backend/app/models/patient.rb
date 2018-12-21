class Patient < ApplicationRecord
  has_many :prescriptions

  validates :name, :address, :birthday, presence: true

  # TODO: we can add some date validation
  # validates :birthday, date: true
end
