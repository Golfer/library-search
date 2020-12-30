# frozen_string_literal: true

module Api
  class ApplicationController < ApplicationController
    include JWTSessions::RailsAuthorization
    protect_from_forgery with: :null_session

    rescue_from JWTSessions::Errors::Unauthorized, with: :not_authorized

    rescue_from ActionController::InvalidAuthenticityToken do |_exception|
      head :forbidden
    end

    private

    def not_authorized
      render json: { error: 'Not authorized' }, status: :unauthorized
    end

    helper_method :current_user

    def current_user
      @current_user ||= begin
                          authorization_token = request.headers['Authorization']
                          raise ActionController::InvalidAuthenticityToken if authorization_token.blank?

                          user = User.find_by(access_token: authorization_token.gsub('Bearer', '').strip)

                          raise ActionController::InvalidAuthenticityToken if user.blank?

                          user
                        end

      user
    end
  end
end
