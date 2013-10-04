class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(params[:user])

    if user
      log_in(user)
      render :json => user.to_json
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
