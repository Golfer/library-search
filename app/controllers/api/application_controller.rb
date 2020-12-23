# frozen_string_literal: true

module Api
  class ApplicationController < ApplicationController
    protect_from_forgery with: :null_session
  end
end
