class Web::Patients::PrescriptionsController < Web::ApplicationController
  def create
    ActiveRecord::Base.transaction do
      prescription = Patient.find(params[:patient_id]).prescriptions.new
      form = Web::PrescriptionForm.new(prescription, permitted_params)
      form.validate!
      form.save!
    end
    head :ok
  end

  private

  def permitted_params
    params.require(:prescription).permit(ingredients: [:id, :percentage])
  end
end
