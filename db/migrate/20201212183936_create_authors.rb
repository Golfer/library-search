class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.string :web_site
      t.string :born_in

      t.datetime :date_bith
      t.datetime :date_death

      t.text :description

      t.timestamps
    end

    change_table :books do |t|
      t.belongs_to :author
    end
  end
end
