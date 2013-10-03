class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      log_in(@user)
      redirect_to user_url(current_user)
    else
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end
end
