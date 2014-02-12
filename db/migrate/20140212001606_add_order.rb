class AddOrder < ActiveRecord::Migration
  def change
  	add_column :saveds, :order, :integer, :default => 0
  end
end
