require 'faker'

puts '🌱 Seeding'

5.times do 
    user = User.create(
        username: "#{ Faker::Name.name }"
    )
end 

    chore = Chore.create([{
        description: "Clean Bathrooms",
        difficulty: 3
    },
    {
        description: "Clean Kitchen",
        difficulty: 4
    },
    {
        description: "Clean Living Room",
        difficulty: 2
    },
    {   description: "Clean All Mirrors and Windows",
        difficulty: 5 
    },
    {   description: "Shower For Once",
        difficulty: 1
}])

puts ' ✔ Done Seeding'
