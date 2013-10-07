Todos::Application.routes.draw do
  root :to => "todo_list#show"

  resources :users, :only => [:new, :create]
  resource :session, :only => [:new, :create, :destroy]

  resources :todo_items, :only => [:create, :update]
end