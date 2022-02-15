class Chore < ApplicationRecord
    has_many :user_chores
    has_many :users, through: :user_chores

    validates :description, presence: true
    validates :difficulty, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
