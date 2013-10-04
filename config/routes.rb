Todos::Application.routes.draw do
  root :to => "todo_list#show"

  resources :users, :only => [:new, :create]
  resource :session, :only => [:new, :create, :destroy]

  resource :todo_list, :only => [:show]
  resources :todo_items
end