use zoo

db.animals.insert(
    {
        "legs": 4,
        "class": "mammal",
        "weight": 20,
        "name": "tobias"
    }
)

db.animals.insert(
    {
        "legs": 2,
        "class": "bird",
        "weight": 1,
        "name": "birdie"
    }
)

db.animals.insert(
    {
        "legs": 0,
        "class": "fish",
        "weight": 3,
        "name": "eely"
    }
)