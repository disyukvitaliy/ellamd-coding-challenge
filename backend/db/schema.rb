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

ActiveRecord::Schema.define(version: 20181221042334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "formulation_ingredient_relations", id: false, force: :cascade do |t|
    t.bigint "formulation_id", null: false
    t.bigint "ingredient_id", null: false
    t.decimal "percentage", precision: 4, scale: 2, null: false
    t.index ["formulation_id", "ingredient_id"], name: "index_formulation_ingredients_on_formulation_id_ingredient_id", unique: true
  end

  create_table "formulations", force: :cascade do |t|
    t.text "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_formulations_on_name", unique: true
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "minimum_percentage", precision: 4, scale: 2, null: false
    t.decimal "maximum_percentage", precision: 4, scale: 2, null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_ingredients_on_name", unique: true
  end

  create_table "patients", force: :cascade do |t|
    t.string "name", null: false
    t.text "address", null: false
    t.datetime "birthday", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prescription_ingredient_relations", id: false, force: :cascade do |t|
    t.bigint "prescription_id", null: false
    t.bigint "ingredient_id", null: false
    t.decimal "percentage", precision: 4, scale: 2, null: false
    t.index ["prescription_id", "ingredient_id"], name: "index_prescription_ingredients_on_prescription_id_ingredient_id", unique: true
  end

  create_table "prescriptions", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_prescriptions_on_patient_id"
  end

  add_foreign_key "formulation_ingredient_relations", "formulations", name: "fk_formulation_ingredient_relations_on_formulation_id"
  add_foreign_key "formulation_ingredient_relations", "ingredients", name: "fk_formulation_ingredient_relations_on_ingredient_id"
  add_foreign_key "prescription_ingredient_relations", "ingredients", name: "fk_prescription_ingredient_relations_on_ingredient_id"
  add_foreign_key "prescription_ingredient_relations", "prescriptions", name: "fk_prescription_ingredient_relations_on_prescription_id"
  add_foreign_key "prescriptions", "patients", name: "fk_prescriptions_on_patient_id"
end
