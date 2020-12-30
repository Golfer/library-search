module Api
  module V1
    class UsersController < Api::ApplicationController
      skip_before_action :verify_authenticity_token, only: %i(create show)
      def create
        @user = User.new(user_params)
        if @user.save
          payload = { user_id: @user.id, email: @user.email }
          refresh_payload = { user_id: @user.id }

          session = JWTSessions::Session.new(payload: payload, refresh_payload: refresh_payload, refresh_by_access_allowed: true)
          tokens = session.login

          @user.update!(
            access_token: tokens[:access],
            access_token_expired_at: tokens[:access_expires_at],
            refresh_token: tokens[:refresh],
            refresh_token_expires_at: tokens[:refresh_expires_at],
            csrf_token: tokens[:csrf]
          )

          response.set_cookie(JWTSessions.access_cookie,
                              value: tokens[:access],
                              httponly: true,
                              secure: Rails.env.production?)
          render :show, status: :created
        else
          render json: { errors: @user.errors }, status: :unprocessable_entity
        end
      end

      def update
        @user = current_user

        if @user.update(user_params)
          render :show
        else
          render json: { errors: @user.errors }, status: :unprocessable_entity
        end
      end

      def show
        @user = current_user
      end

      private

      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name)
      end
    end
  end
end
