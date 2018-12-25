class Web::FormulationsController < Web::ApplicationController
  def index
    render json: Formulation.all.includes(ingredient_relations: :ingredient),
      each_serializer: FormulationSerializer,
      include: [ ingredient_relations: :ingredient ]
  end
end
