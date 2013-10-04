# == Schema Information
#
# Table name: todo_items
#
#  id           :integer          not null, primary key
#  todo_list_id :integer          not null
#  body         :string(255)      not null
#  order        :integer          not null
#  completed    :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class TodoItem < ActiveRecord::Base
  attr_accessible :body, :completed, :order, :todo_list_id

  validates :body, :order, :todo_list_id, :presence => true
  before_create { self.completed ||= false }

  belongs_to :todo_list

end
