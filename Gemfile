# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.0'
# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'
# Use Puma as the app server
gem 'puma', '~> 5.0'
# Use SCSS for stylesheets
gem 'sass-rails', '>= 6'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 5.0'

# Not Use; Because Force::SSL deprecated in Rails 6.1; That's why use jbuilder instead jsonapi-resources
# gem 'jsonapi-resources', '~>0.10.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.16'
gem 'rack-cors'
# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '~> 1.5.1', require: false

gem 'activerecord-import'
gem 'jwt_sessions'
gem 'redis'
gem 'rest-client'
gem 'slim-rails'

group :development, :test do
  gem 'byebug', platforms: %i(mri mingw x64_mingw)

  gem 'pry'
  gem 'pry-byebug'

  gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'master'
end

group :development do
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'web-console', '>= 4.1.0'

  gem 'overcommit'
  gem 'rubocop', '0.79.0'
  gem 'rubocop-rails', '2.4.1', require: false

  gem 'brakeman', require: false

  gem 'guard-brakeman'
  gem 'guard-rubocop', require: false
end

group :test do
  gem 'database_cleaner'
  gem 'rails-controller-testing'
  gem 'rspec-rails', '~> 3.8'

  gem 'rspec-activemodel-mocks'
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5'
  gem 'simplecov', '~> 0.16.1', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i(mingw mswin x64_mingw jruby)
