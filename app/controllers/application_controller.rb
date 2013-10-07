class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  def require_logged_in_user
    redirect_to new_session_url unless self.logged_in?
  end

  def require_owning_user(todo_item)
    raise "you aren't authorized to change that note" unless todo_item.user == self.current_user.id
  end

  def require_no_logged_in_user
    redirect_to root_url if self.logged_in?
  end
end
