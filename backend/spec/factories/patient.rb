FactoryBot.define do
  factory :patient do
    name { Faker::Name.name }
    address { Faker::Address.full_address }
    birthday { Faker::Date.between(50.years.ago, 20.years.ago) }
  end
end
