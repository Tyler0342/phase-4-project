class UserChoreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :chore
end
