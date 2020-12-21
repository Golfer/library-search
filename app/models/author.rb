class Author < ApplicationRecord
  belongs_to :book, optional: true

  validates :first_name, :last_name, presence: true
end
