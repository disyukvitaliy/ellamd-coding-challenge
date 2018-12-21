Rails.application.routes.draw do
  namespace :web do
    resources :patients, only: %i[index create] do
      resources :prescriptions, module: :patients, only: %i[create]
    end
  end
end
