class TodoItemsController < ApplicationController
  before_filter :require_logged_in_user

  def create
      @todo_item = TodoItem.new(params[:todo_item])
      @todo_item.todo_list_id = self.current_user.todo_list.id
      @todo_item.completed = false

    if @todo_item.save
      render :json => @todo_item
    else
      render :json => @todo_item.errors.full_messages, :status => 422
    end
  end

  def update
    @todo_item = TodoItem.find(params[:id])
    require_owning_user(@todo_item)

    if @todo_item.update_attributes(params[:todo_item])
      render :json => @todo_item
    else
      render :json => @todo_item.errors.full_messages, :status => 422
    end
  end

  def require_owning_user(todo_item)
    unless todo_item.user == self.current_user
      raise "you aren't authorized to change that todo"
    end
  end
end