FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "#{FFaker::Internet.email}-#{n}" }
    password { FFaker::Internet.password }
    first_name { FFaker::Name.first_name }
    last_name { FFaker::Name.last_name }
  end
end
