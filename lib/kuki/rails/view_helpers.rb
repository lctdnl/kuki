module Kuki
  module Rails
    module ViewHelpers
      def cookies_allowed?
        return cookies[:cookieconsent_status] == "allow"
      end
    end
  end
end