
module Kuki
  module Rails
    class Railtie < ::Rails::Railtie
      initializer "kuki.view_helpers" do
        require 'kuki/rails/view_helpers'
        ActiveSupport.on_load( :action_view ){ include Kuki::Rails::ViewHelpers }

        Kuki::Rails::Railtie.instance_eval do
          I18n.load_path += Dir.glob( File.dirname(__FILE__) + "config/locales/**/.{rb,yml}" )
        end
        I18n.load_path += Dir.glob( File.dirname(__FILE__) + "config/locales/**/.{rb,yml}" )
        
      end
    end

    class Engine < ::Rails::Engine
    end
  end
end

