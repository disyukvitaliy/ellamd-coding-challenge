Rails.application.routes.draw do
  namespace :web do
    resources :tests, only: %i[index create]
  end
end
