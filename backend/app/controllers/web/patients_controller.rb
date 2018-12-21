class Web::PatientsController < Web::ApplicationController
  def index
    render json: Web::PatientQuery.new(params),
      each_serializer: PatientSerializer,
      include: [ prescriptions: { ingredient_relations: :ingredient } ]
  end
end
