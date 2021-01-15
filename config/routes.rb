Rails.application.routes.draw do
  root 'dashboard#index'


  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resource :users
      resource :sessions
      resources :books, only: %i(index)
      resources :search, only: %i(index create)
    end
  end

  get "*path" => redirect("/")
end
