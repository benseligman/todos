class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  def require_logged_in_user
    redirect_to new_session_url unless self.logged_in?
  end
end
