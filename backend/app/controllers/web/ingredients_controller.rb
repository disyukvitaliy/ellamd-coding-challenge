class Web::IngredientsController < Web::ApplicationController
  def index
    render json: Ingredient.all, each_serializer: IngredientSerializer
  end
end
