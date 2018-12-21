Rails.application.routes.draw do
  namespace :web do
    resources :patients, only: %i[index]
  end
end
