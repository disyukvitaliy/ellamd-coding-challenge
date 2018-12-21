class PrescriptionPdf
  attr_accessor :prescription
  include Prawn::View

  def initialize(prescription)
    @prescription = prescription
    content
  end

  private

  def content
    text "Prescription ##{prescription.id}"
    move_down 20
    text "Patient"
    text "Name: #{prescription.patient.name}"
    text "Address: #{prescription.patient.address}"
    text "Birthday: #{prescription.patient.birthday}"
    move_down 20
    text "Ingredients"
    ingredients
  end

  def ingredients
    prescription.ingredient_relations.includes(:ingredient).each do |ingredient_relation|
      text "Name: #{ingredient_relation.ingredient.name}. Percentage: #{ingredient_relation.percentage}"
    end
  end
end