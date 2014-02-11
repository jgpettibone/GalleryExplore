class CreateImages < ActiveRecord::Migration
  def self.up
  	create_table :images do |t|
  		t.string :src
  		t.string :collection
  		t.string :museum
  		t.string :desc
  		t.string :culture
  		t.string :country
  		t.string :tags
  	end
  end

  def self.down
  	drop_table :images
  end
end
