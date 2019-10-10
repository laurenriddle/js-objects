const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

// Output the following value to the console. Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942.

const name = beatles.members[1].name
const startYear = beatles.history.formed
const endYear = beatles.history.disbanded
const birthYear = beatles.members[1].birth

console.log(`${name} was in the Beatles from ${startYear} to ${endYear}. He was born in ${birthYear}.`)