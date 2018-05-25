require 'kuki/rails/view_helpers'

module Kuki
  module Rails
    class Railtie < ::Rails::Railtie
      initializer "kuki.view_helpers" do
        ActiveSupport.on_load( :action_view ){ include Kuki::Rails::ViewHelpers }
      end

      initializer 'kuki.i18n' do |app|
        Kuki::Rails::Railtie.instance_eval do
          add("config/locales/**/*.yml")
        end
      end

      protected

      def self.add(pattern)
        files = Dir[File.join(File.dirname(__FILE__), '../../..', pattern)]
        I18n.load_path.concat(files)
      end
    end

    class Engine < ::Rails::Engine
    end
  end
end

