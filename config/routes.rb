SpaApp::Application.routes.draw do
  get "main/index"
  root to: 'main#index'
  resources :todos, :except => [:edit, :new]
end
