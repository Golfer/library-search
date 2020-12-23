module Nytimes
  module Fetcher
    class Books
      attr_accessor :client, :offset

      def initialize(**args)
        @offset = 0 || args.key?(:offset) & args[:offset]
      end

      def perform
        response ||= JSON.parse(fetch_data)
        response = response.deep_symbolize_keys
        { result: response[:results], num_records: response[:num_results], current_offset: offset }
      end

      private

      def fetch_data
        @fetch_data = RestClient.get(request_url(offset))
      rescue StandardError => e
        raise e
      end

      def request_url(offset)
        @request_url ||= "#{base_link}&offset=#{offset}"
      end

      def base_link
        @base_link = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=4ThXGUgdgXVlAERrivDtbIrnAQ801sea'
      end
    end
  end
end
