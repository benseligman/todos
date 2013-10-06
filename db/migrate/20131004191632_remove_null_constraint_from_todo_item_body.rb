class RemoveNullConstraintFromTodoItemBody < ActiveRecord::Migration
  def up
    change_column :todo_items, :body, :string, :null => true
  end

  def down
    change_column :todo_items, :body, :string, :null => false
  end
end
