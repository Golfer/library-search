module Api
  module V1
    class SessionsController < Api::ApplicationController
      skip_before_action :verify_authenticity_token, only: %i(create show)

      def create
        @user = User.find_by!(email: user_params[:email])
        if @user&.authenticate(user_params[:password])
          payload = { user_id: @user.id, email: @user.email }
          refresh_payload = { user_id: @user.id }

          session = JWTSessions::Session.new(payload: payload, refresh_payload: refresh_payload, refresh_by_access_allowed: true)
          tokens = session.login

          @user.update!( access_token: tokens[:access], access_token_expired_at: tokens[:access_expires_at],
                         refresh_token: tokens[:refresh], refresh_token_expires_at: tokens[:refresh_expires_at],
                         csrf_token: tokens[:csrf])

          response.set_cookie(JWTSessions.access_cookie,
                              value: tokens[:access],
                              httponly: true,
                              secure: Rails.env.production? )

          render :show, status: :created
        else
          not_found
         end
      end

      def show
        @user = current_user
      end

      private

      def user_params
        params.require(:user).permit(:email, :password)
      end

      def not_found
        render json: { errors: 'Cannot find email/password combination' }, status: :not_found
      end
    end
  end
end
