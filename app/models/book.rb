class Book < ApplicationRecord
  has_many :authors

  validates :title, presence: true

  def self.random_books(limit)
    find(distinct(:title).pluck(:id).sample(limit))
  end
end
