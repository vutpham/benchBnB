class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :require_login, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user.nil? ? nil : @current_user
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def logout
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_api_session_url unless current_user
  end
end
