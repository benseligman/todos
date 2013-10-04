# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  username      :string(255)      not null
#  password_hash :string(255)      not null
#  token         :string(255)      not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :password, :token, :username

  include BCrypt

  validates :username, :presence => true,
                       :uniqueness => true,
                       :format => { :with => /^[^ ]+$/, :message => "can't have spaces." }
  validates :password_hash, :presence => true
  validates :token, :presence => true

  before_validation :set_token, :on => :create
  after_create :add_todo_list

  has_one :todo_list

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.find_by_credentials(credentials)
    user = self.find_by_username(credentials[:username])

    user if user && user.password == credentials[:password]
  end

  def set_token
    self.token = generate_token
  end

  def set_token!
    self.set_token
    self.save!
  end

  private

  def generate_token
    SecureRandom::urlsafe_base64
  end

  def add_todo_list
    TodoList.create!(:user_id => self.id)
  end
end
