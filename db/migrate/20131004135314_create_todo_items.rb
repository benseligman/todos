class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.integer :todo_list_id, :null => false
      t.string :body, :null => false
      t.integer :order, :null => false
      t.boolean :completed, :null => false, :default => false

      t.timestamps
    end

    add_index :todo_items, :todo_list_id
  end
end
