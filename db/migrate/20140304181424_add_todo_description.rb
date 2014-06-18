class AddTodoDescription < ActiveRecord::Migration
  def change
    add_column :todos, :description, :text, :default => ""
  end
end
