require 'sinatra'
require "sinatra/reloader" if development?
require 'active_record'
require 'digest/sha1'
require 'pry'
require 'uri'
require 'open-uri'
# require 'bcrypt'
require 'tux'
# require 'nokogiri'

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
  has_many :images
  validates_uniqueness_of :image_id
end

class Tour < ActiveRecord::Base
end

class Tourimage < ActiveRecord::Base
  has_many :tours
  has_many :images
  # validates_uniqueness_of :image_id :scope => :tour_id
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

get '/tours' do
  tours = Tour.all
  tours.map { |tour| 
    tour.as_json
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
  image = Image.find_by_id data['id']
  if (data['tags']) then
    if image.tags.empty? then
      newTags = "#{data['tags']}"
    else
      newTags = "#{image.tags},#{data['tags']}"
    end
  end
  newTags = newTags.gsub(/,,/, '').chomp(',')
  image.update(tags: newTags)
  image.to_json
end

post '/remove' do
  data = JSON.parse request.body.read
  record = Saved.find_by_image_id data['id']
  Saved.delete record['id']
  images = Saved.all
  images.map {|saved|
    newOrder = saved.order - 1
    saved.update(order: newOrder)
    image = Image.find_by_id saved['image_id'].as_json
  }.to_json
end

post '/order' do
  data = JSON.parse request.body.read
  current = Saved.find_by_image_id data['id']
  order = data['order']
  count = Saved.count
  if order > count then
    # doesn't make sense
  else
    current.update(order: data['order'])  
  end
  images = Saved.all 
  images.map { |saved| 
    image = Image.find_by_id saved['image_id'].as_json 
    unless saved.eql? current
      # image['order'] = saved['order']
      image.update(order: saved['order']) 
    end
    # image
  }.to_json
end

post '/saved' do
  data = JSON.parse request.body.read
  image = Saved.create(:image_id => data['id'])
  count = Saved.count
  image.update(order: count)
  image.to_json
end

get '/saved' do
  images = Saved.all
  images.map { |saved| 
    image = Image.find_by_id saved['image_id']
    image['order'] = saved['order']
    image
  }.to_json
end

get '/create' do
  images = Image.order("id ASC")
  images.map { |image| 
    image.as_json
  }.to_json
end

post '/talking' do
  data = JSON.parse request.body.read
  image = Image.find_by_id data['id']
  newTalkingPts = "#{data['talkingpts']}"
  image.update(talkingpts: newTalkingPts)
  image.to_json
end

post '/tourid' do
  data = JSON.parse request.body.read
  tour = Tour.find_by_tourname data['tourname']
  tour.to_json
end

post '/tourname' do
  data = JSON.parse request.body.read
  tour = Tour.create(:tourname => data['tourname'])
  tour.to_json
end

post '/tourimage' do
  data = JSON.parse request.body.read
  tourimage = Tourimage.create(:tour_id => data['tour_id'])
  tourimage.update(image_id: data['image_id'])
  tourimage.update(order: data['order'])
  tourimage.to_json
end

post '/alltourimages' do
  data = JSON.parse request.body.read
  images = Tourimage.where('tour_id = ?', "#{data['tour_id']}")
  images.map { |tourimage| 
    image = Image.find_by_id tourimage['image_id']
    image['order'] = tourimage['order']
    image
  }.to_json
end
