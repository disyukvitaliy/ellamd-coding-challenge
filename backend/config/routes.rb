Rails.application.routes.draw do
  namespace :web do
    resources :formulations, only: %i[index]
    resources :ingredients, only: %i[index]
    resources :patients, only: %i[index create] do
      resources :prescriptions, module: :patients, shallow: true, only: %i[show create]
    end
  end
end
