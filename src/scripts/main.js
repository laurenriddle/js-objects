// console.log("We're learning about objects!")


// // Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// const vehicle = {
//     color: "Red",
//     year: 2015,
//     make: "Ford",
//     model: "Mustang"
// }



// // Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// const animalNames = [ "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky" ]



// // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// const father = {
//     name: "Mike",
//     age: 48
// }

// const brother = {
//     name: "Caleb",
//     age: 14
// }

// const sister = {
//     name: "Gabi",
//     age: 10
// }

// const mother = {
//     name: "Virginia",
//     age: 42
// }

// const familyMembers = [father, brother, sister, mother]

// console.log("familyMembers", familyMembers)









// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }


// console.log("Wardrobe Height", wardrobe.height)
// console.log("Wardrobe Manufacturer", wardrobe.manufacturer)
// console.log("Wardrobe Contents", wardrobe.contents)
// console.log(wardrobe.contents[0], wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4])
// console.log("Wardrobe Depth", wardrobe.depth)
// console.log("Wardrobe Width", wardrobe.width)









// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}


console.log("Stories", empireStateBuilding.stories)
console.log("Height", empireStateBuilding.height)
console.log("Square Feet", empireStateBuilding.squareFeet)
console.log("East West Length", empireStateBuilding.eastWestLength)
console.log("North South Length", empireStateBuilding.northSouthLength)




// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

const architectKey = "architect"
const ownerKey = "owner"
const costKey = "cost"
const constructionDateKey = "constructionDate"
const addressKey = "address"



console.log("Architect", empireStateBuilding[architectKey])
console.log("Owner", empireStateBuilding[ownerKey])
console.log("Cost", empireStateBuilding[costKey])
console.log("Construction Date", empireStateBuilding[constructionDateKey])
console.log("Address", empireStateBuilding[addressKey])