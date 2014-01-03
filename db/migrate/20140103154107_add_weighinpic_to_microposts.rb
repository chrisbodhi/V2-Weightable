class AddWeighinpicToMicroposts < ActiveRecord::Migration
  def change
    add_column :microposts, :weighinpic, :string
  end
end
