class Books
  RECORD_LIMIT = 15
  attr_accessor :args

  def initialize(args = nil)
    @args = args
  end

  def perform
    # binding.pry
    # books

    !!args && args.key?(:q) && args.key?(:type) ? search_by_params : books
  end

  private

  def search_by_params
    books = Book.ransack("#{args[:type]}_cont": args[:q])
    books.result.distinct(:title).limit(RECORD_LIMIT)
  end

  def books
    Book.random_books(RECORD_LIMIT)
  end
end
