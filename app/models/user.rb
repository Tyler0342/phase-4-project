class User < ApplicationRecord
    has_many :user_chores
    has_many :chores, through: :user_chores

    validates :name, presence: true
    validates :password, presence: true
    has_secure_password
end
