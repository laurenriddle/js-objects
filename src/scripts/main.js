console.log("We're learning about objects!")


// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

const vehicle = {
    color: "Red",
    year: 2015,
    make: "Ford",
    model: "Mustang"
}



// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

const animalNames = [ "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky" ]



// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const father = {
    name: "Mike",
    age: 48
}

const brother = {
    name: "Caleb",
    age: 14
}

const sister = {
    name: "Gabi",
    age: 10
}

const mother = {
    name: "Virginia",
    age: 42
}

const familyMembers = [father, brother, sister, mother]

console.log("familyMembers", familyMembers)