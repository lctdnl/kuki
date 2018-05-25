require 'kuki/view_helpers'

module Kuki
  class Railtie < Rails::Railtie
    initializer "kuki.view_helpers" do
      ActionView::Base.send :include, ViewHelpers
    end
  end
end
