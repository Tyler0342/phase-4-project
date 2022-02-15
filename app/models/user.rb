class User < ApplicationRecord
    has_many :user_chores
    has_many :chores, through: :user_chores
end
