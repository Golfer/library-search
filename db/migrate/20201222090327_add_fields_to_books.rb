class AddFieldsToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :author_list, :string
    add_column :books, :isbns, :jsonb, null: false, default: []
    add_column :books, :ranks_history, :jsonb, null: false, default: []
  end
end
