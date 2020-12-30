class Books
  def perform
    books
  end

  private

  def books
    Book.random_books(15)
  end
end
