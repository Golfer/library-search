# frozen_string_literal: true

# RUN: rails r lib/imports/random_push_books.rb
require 'factory_bot'
require 'faker'
require 'ffaker'
include FactoryBot::Syntax::Methods

import_books = []

1000.times do |_i|
  import_books << build(:book)
end
Book.import(import_books, on_duplicate_key_ignore: true)
import_books = []

1000.times do |_i|
  import_books << build(:book_culture)
end
Book.import(import_books, on_duplicate_key_ignore: true)
import_books = []

1000.times do |_i|
  import_books << build(:book_ff)
end
Book.import(import_books, on_duplicate_key_ignore: true)
