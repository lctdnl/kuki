$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "kuki/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "kuki"
  s.version     = Kuki::VERSION
  s.authors     = ["mrusa"]
  s.email       = ["michael@rusa.at"]
  s.homepage    = "https://stiege10.at"
  s.summary     = "Add cookie consent and helper functions"
  s.description = "Add cookie consent and helper functions"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.1.6"

  s.add_development_dependency "sqlite3"
end
