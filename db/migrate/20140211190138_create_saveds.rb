class CreateSaveds < ActiveRecord::Migration
  def change
  	create_table :saveds do |t|
  		t.string :src
  		t.string :collection
  		t.string :museum
  		t.string :desc
  		t.string :culture
  		t.string :country
  		t.string :tags
  	end
  end
end
