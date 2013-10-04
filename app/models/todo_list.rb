# == Schema Information
#
# Table name: todo_lists
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TodoList < ActiveRecord::Base
  attr_accessible :user_id

  belongs_to :user
  has_many :todo_items
end
