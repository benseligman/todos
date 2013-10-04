class TodoItemsController < ApplicationController
  def update
    @todo_item = TodoItem.find(params[:id])

    if @todo_item.update_attributes(params[:todo_item])
      render :json => @todo_item
    else
      render :json => @todo_item.errors.full_messages, :status => 422
    end
  end
end