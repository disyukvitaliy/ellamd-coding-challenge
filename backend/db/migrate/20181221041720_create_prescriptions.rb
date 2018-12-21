class CreatePrescriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :prescriptions do |t|
      t.references :patient,
        foreign_key: { name: :fk_prescriptions_on_patient_id },
        null: false
      t.timestamps
    end
  end
end
