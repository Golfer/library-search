FactoryBot.define do
  factory :book do
    title { Faker::Book.title }
    description { Faker::Quote.matz }
    author_list { Faker::Book.author }
  end

  factory :book_culture, class: Book do
    title { Faker::Books::CultureSeries.book }
    description { Faker::Quote.matz }
    author_list { Faker::Book.author }
  end

  factory :book_ff, class: Book do
    title { FFaker::Book.title }
    description { Faker::Quote.matz }
    author_list { Faker::Book.author }
  end
end
