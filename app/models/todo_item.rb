# == Schema Information
#
# Table name: todo_items
#
#  id           :integer          not null, primary key
#  todo_list_id :integer          not null
#  body         :string(255)
#  order        :integer          not null
#  completed    :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class TodoItem < ActiveRecord::Base
  attr_accessible :body, :completed, :order, :todo_list_id

  validates :order, :todo_list_id, :presence => true

  belongs_to :todo_list
  has_one :user, :through => :todo_list

end
