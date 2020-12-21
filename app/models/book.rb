class Book < ApplicationRecord
  has_many :authors

  validates :title, presence: true
end
