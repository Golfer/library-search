Rails.application.routes.draw do
  root 'dashboard#index'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :books, only: %i(index)
    end
  end
end
