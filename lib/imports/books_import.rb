# frozen_string_literal: true

# RUN: rails r lib/imports/books_import.rb
# Just for import Data to DB; Fetch books from external API https://api.nytimes.com
#
data_api_result = Nytimes::Fetcher::Books.new.perform

books = data_api_result[:result]

records = data_api_result[:num_records]
time_fetch = records.fdiv(20).to_i

time_fetch.times do |i|
  next if i.zero?

  sleep(rand(1..30))
  p "send request to API; Offset #{i * 20}"

  Book.transaction do
    api_result = Nytimes::Fetcher::Books.new(offset: i * 20).perform
    date_result = api_result[:result]
    books.concat(date_result)

    if books.count >= 100
      import_books =
        books.inject([]) do |arr, book|
          element = book.inject({}) { |data, h| h[0] == :author ? data.merge!(author_list: h[1]) : data.merge!(h[0] => h[1]) }
          arr << Book.new(element.slice(:title, :description, :author_list, :isbns, :ranks_history))
        end

      Book.import(import_books, on_duplicate_key_ignore: true)
      p Book.count
      p Book.last
      books.clear
    end
  end
end

Book.transaction do
  import_books =
    books.inject([]) do |arr, book|
      element = book.inject({}) { |data, h| h[0] == :author ? data.merge!(author_list: h[1]) : data.merge!(h[0] => h[1]) }
      arr << Book.new(element.slice(:title, :description, :author_list, :isbns, :ranks_history))
    end

  Book.import(import_books, on_duplicate_key_ignore: true)
  p Book.count
  p Book.last
end
