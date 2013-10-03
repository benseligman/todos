class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      log_in(@user)
      render :json => @user.to_json
    else
      render :new
    end
  end
end
