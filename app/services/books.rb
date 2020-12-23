class Books
  def perform
    books
  end

  private

  def books
    Book.random_books(25)
  end
end
