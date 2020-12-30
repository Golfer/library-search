class AddRefreshTokenToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :csrf_token, :string
    add_column :users, :refresh_token, :string
    add_column :users, :refresh_token_expires_at, :datetime
  end
end
