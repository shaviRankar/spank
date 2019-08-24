Rails.application.routes.draw do
  root to: 'pages#home'
  get 'live', to: 'pages#live'
  get 'music', to: 'pages#music'
  get 'video', to: 'pages#video'
  get 'bio', to: 'pages#bio'
  get 'contact', to: 'pages#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
