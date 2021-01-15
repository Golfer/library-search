class AddIndexesToBookAndAuthorTables < ActiveRecord::Migration[6.1]
  def change
    add_index :books, :title
    add_index :books, :isbns

    rename_column :authors, :first_name, :full_name
    remove_column :authors, :last_name

    add_index :authors, :full_name
    add_index :authors, :web_site
  end
end
