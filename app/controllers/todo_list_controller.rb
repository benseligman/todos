class TodoListController < ApplicationController
  before_filter :require_logged_in_user

  def show
    @todo_items = self.current_user.todo_list.todo_items
  end
end
