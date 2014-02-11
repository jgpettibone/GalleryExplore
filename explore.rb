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

post '/details' do 
  data = JSON.parse request.body.read
  # puts data
  image = Image.find_by_src data['src']  
  image.to_json
end

post '/tags' do
  data = JSON.parse request.body.read
  image = Image.find_by_src data['src']
  newTags = "#{image.tags},#{data['tags']}"
  image.update(tags: newTags)
end

get '/create' do
  images = Image.order("id ASC")
  images.map { |image| 
    image.as_json
  }.to_json
end

get '/details' do 
end




# get '/links' do
#     links = Link.order("created_at DESC")
#     links.map { |link|
#         link.as_json.merge(base_url: request.base_url)
#     }.to_json
# end

# post '/links' do
#     data = JSON.parse request.body.read
#     uri = URI(data['url'])
#     raise Sinatra::NotFound unless uri.absolute?
#     link = Link.find_by_url(uri.to_s) ||
#            Link.create( url: uri.to_s, title: get_url_title(uri) )
#     link.as_json.merge(base_url: request.base_url).to_json
# end

# get '/:url' do
#     link = Link.find_by_code params[:url]
#     raise Sinatra::NotFound if link.nil?
#     link.clicks.create!
#     redirect link.url
# end

# post '/login' do
#   data = JSON.parse request.body.read
#   user = User.find_by_username data['username']
#   if user.nil? or !user.authenticate data['password']
#     {token: ''}.to_json
#   else
#     {token: user.token}.to_json
#   end
# end

# post '/register' do
#   data = JSON.parse request.body.read
#   user = User.create( username: data['username'],
#                       password: data['password'],
#                       password_confirmation: data['passwordConfirmation'])
#   if user.errors.any?
#     {token: ''}.to_json
#   else
#     {token: user.token}.to_json
#   end
# end

###########################################################
# Utility
###########################################################

# def read_url_head url
#     head = ""
#     url.open do |u|
#         begin
#             line = u.gets
#             next  if line.nil?
#             head += line
#             break if line =~ /<\/head>/
#         end until u.eof?
#     end
#     head + "</html>"
# end

# def get_url_title url
#     # Nokogiri::HTML.parse( read_url_head url ).title
#     result = read_url_head(url).match(/<title>(.*)<\/title>/)
#     result.nil? ? "" : result[1]
# end
