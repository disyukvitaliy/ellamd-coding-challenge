class Web::Patients::PrescriptionsController < Web::ApplicationController
  include ActionController::MimeResponds

  def show
    prescription = Prescription.find(params[:id])

    respond_to do |format|
      format.json do
        render json: prescription,
          serializer: PrescriptionSerializer,
          include: [ingredient_relations: :ingredient]
      end
      format.pdf do
        send_data PrescriptionPdf.new(prescription).render,
          filename: "prescription_#{prescription.id}.pdf",
          type: 'application/pdf',
          disposition: 'inline'
      end
    end
  end

  def create
    prescription = Patient.find(params[:patient_id]).prescriptions.new

    ActiveRecord::Base.transaction do
      form = Web::PrescriptionForm.new(prescription, permitted_params)
      form.validate!
      form.save!
    end

    render json: prescription,
      serializer: PrescriptionSerializer,
      include: [ingredient_relations: :ingredient]
  end

  private

  def permitted_params
    params.require(:prescription).permit(ingredients: [:id, :percentage])
  end
end
