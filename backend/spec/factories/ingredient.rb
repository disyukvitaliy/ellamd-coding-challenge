FactoryBot.define do
  factory :ingredient do
    name { Faker::Lorem.word }
    minimum_percentage { Faker::Number.between(1.0, 9.0) }
    maximum_percentage { Faker::Number.between(10.0, 20.0) }
    description { Faker::Lorem.sentence }
  end
end
