# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, default: ""
      t.string :last_name,  null: false, default: ""

      t.string :email,      null: false, default: ""
      t.string :password,   null: false, default: ""

      t.string :access_token
      t.datetime :access_token_expired_at

      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at

      t.string :current_sign_in_ip
      t.string :last_sign_in_ip

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
  end
end
