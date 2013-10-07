class SessionsController < ApplicationController
  before_filter :require_no_logged_in_user, :only => [:new, :create]
  before_filter :require_logged_in_user, :only => [:destroy]

  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(params[:user])

    if user
      log_in(user)
      redirect_to root_url
    else
      @user = User.new(params[:user])
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end
end
