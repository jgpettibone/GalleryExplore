# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140617065728) do

  create_table "details", force: true do |t|
    t.string "src"
  end

  create_table "images", force: true do |t|
    t.string  "src"
    t.string  "collection"
    t.string  "museum"
    t.string  "desc"
    t.string  "culture"
    t.string  "country"
    t.string  "tags"
    t.text    "talkingpts", limit: 255
    t.integer "order",                  default: 0
  end

  create_table "saveds", force: true do |t|
    t.integer "order",    default: 0
    t.integer "image_id"
  end

  create_table "tourimages", force: true do |t|
    t.integer "tour_id"
    t.integer "image_id"
    t.integer "order"
  end

  create_table "tours", force: true do |t|
    t.string "tourname"
  end

end
