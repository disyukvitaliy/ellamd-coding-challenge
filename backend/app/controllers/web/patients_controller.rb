class Web::PatientsController < Web::ApplicationController
  def index
    render json: Web::PatientQuery.new(params).call,
      each_serializer: PatientSerializer,
      include: [prescriptions: { ingredient_relations: :ingredient }]
  end

  def create
    patient = Patient.create!(permitted_params)
    render json: patient, serializer: PatientSerializer, include: %i[prescriptions]
  end

  private

  def permitted_params
    params.require(:patient).permit(:name, :address, :birthday)
  end
end
