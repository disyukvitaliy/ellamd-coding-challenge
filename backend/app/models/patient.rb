class Patient < ApplicationRecord
  validates :name, :address, :birthday, presence: true

  # TODO: we can add some date validation
  # validates :birthday, date: true
end
