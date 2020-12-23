# frozen_string_literal: true

module Api
  module V1
    class BooksController < Api::ApplicationController
      def index
        @books = Books.new.perform
      end
    end
  end
end
