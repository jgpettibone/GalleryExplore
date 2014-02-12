require 'sinatra'
require "sinatra/reloader" if development?
require 'active_record'
require 'digest/sha1'
require 'pry'
require 'uri'
require 'open-uri'
# require 'bcrypt'
require 'tux'
# # require 'nokogiri'

###########################################################
# Configuration
###########################################################

set :public_folder, File.dirname(__FILE__) + '/public'

configure :development, :production do
    ActiveRecord::Base.establish_connection(
       :adapter => 'sqlite3',
       :database =>  'db/dev.sqlite3.db'
     )
end

# Handle potential connection pool timeout issues
after do
    ActiveRecord::Base.connection.close
end

# turn off root element rendering in JSON
ActiveRecord::Base.include_root_in_json = false

###########################################################
# Models
###########################################################
# Models to Access the database through ActiveRecord.
# Define associations here if need be
# http://guides.rubyonrails.org/association_basics.html

class Image < ActiveRecord::Base
end

class Detail < ActiveRecord::Base
end

class Saved < ActiveRecord::Base
end

###########################################################
# Routes
###########################################################

get '/' do
  erb :index
end

get '/images' do
  images = Image.order("id ASC")
  images.map { |image| 
    image.as_json
  }.to_json
end

get '/details' do 
  thisimage = Detail.find_by_id(1)
  image = Image.find_by_src thisimage.src
  image.to_json
end

post '/detailimage' do
  data = JSON.parse request.body.read
  detail = Detail.find_by_id(1);
  detail.update(src: data['src'])
  detail.to_json
end

post '/tags' do
  data = JSON.parse request.body.read
  image = Image.find_by_src data['src']
  puts image.tags
  if image.tags.empty? then
    newTags = "#{data['tags']}"
  else
    newTags = "#{image.tags},#{data['tags']}"
  end
  image.update(tags: newTags)
  image.to_json
end

post '/remove' do
  data = JSON.parse request.body.read
  Saved.delete data['id'];
  images = Saved.all
  images.map {|image|
    image.as_json
  }.to_json
end

post '/saved' do
  data = JSON.parse request.body.read
  image = Saved.create data
end

get '/saved' do
  images = Saved.all 
  images.map { |image| 
    image.as_json
  }.to_json
end

get '/create' do
  images = Image.order("id ASC")
  images.map { |image| 
    image.as_json
  }.to_json
end



###########################################################
# Utility
###########################################################

