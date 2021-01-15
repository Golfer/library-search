# frozen_string_literal: true

module Api
  module V1
    class SearchController < Api::ApplicationController
      def index
        @books = Books.new(search_params).perform
      end

      def create
        @books = Books.new(search_params).perform
      end

      private

      def search_params
        params.require(:search).permit!
      end
    end
  end
end
