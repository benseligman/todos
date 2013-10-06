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

require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
