require 'csv'

class FormulationImport
  def call
    return if Formulation.exists?

    CSV.foreach(Rails.root.join('db', 'formulations.csv')).to_a[1..-1].each do |row|
      Formulation.create!(name: row[1])
    end
  end
end