class TodoListController < ApplicationController
  def show
    @todo_items = self.current_user.todo_list.todo_items
  end
end
