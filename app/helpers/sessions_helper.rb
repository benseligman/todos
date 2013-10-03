module SessionsHelper
  def current_user
    @current_user ||= User.find_by_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

  def log_in(user)
    user.set_token!
    session[:token] = user.token
  end

  def log_out
    user.set_token!
    session[:token] = nil
  end
end
