require_relative './ingredient_import'
require_relative './formulation_import'
require_relative './formulation_ingredient_import'

IngredientImport.new.call
FormulationImport.new.call
FormulationIngredientImport.new.call
