class Web::FormulationsController < Web::ApplicationController
  def index
    render json: Formulation.all,
      each_serializer: FormulationSerializer,
      include: [ ingredient_relations: :ingredient ]
  end
end
