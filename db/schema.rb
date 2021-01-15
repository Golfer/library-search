# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_30_220750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "full_name"
    t.string "web_site"
    t.string "born_in"
    t.datetime "date_bith"
    t.datetime "date_death"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["full_name"], name: "index_authors_on_full_name"
    t.index ["web_site"], name: "index_authors_on_web_site"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "author_id"
    t.string "author_list"
    t.jsonb "isbns", default: [], null: false
    t.jsonb "ranks_history", default: [], null: false
    t.index ["author_id"], name: "index_books_on_author_id"
    t.index ["isbns"], name: "index_books_on_isbns"
    t.index ["title"], name: "index_books_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "email", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.string "access_token"
    t.datetime "access_token_expired_at"
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "csrf_token"
    t.string "refresh_token"
    t.datetime "refresh_token_expires_at"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
