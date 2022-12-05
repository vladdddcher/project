// ПРактика

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    } 
}

// start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('good')
        } else {
            console.log('none')
            i--
        }
    }
}
// remeberMyFilms()


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log('(посмотрел меньше 10')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 24) {
        console.log('посмотрел от 10 - 25')
    } else if (personalMovieDB.count > 25) {
        console.log('посмотрел больше 25')
    } else {
        console.log('че ты вообще тут ввел?')
    }
}

// detectPersonalLevel()

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat)




// function writeYourGenres() {
    
//     for (let i = 0; i < 3; i++) {
//         const a = prompt('Ващ любимый жанр под номером', '')
//         personalMovieDB.genres = a
//     }
// }

// writeYourGenres()

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ващ любимый жанр под номером, ${i}`)
    }
}

writeYourGenres()





// ====---урок 12

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// // personalMovieDB[1] = '2'

// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '')
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d


// console.log(personalMovieDB)

// ....................-----------=========================================

// ====---урок 13


// if (4 === 9) {
//     console.log('okey')
// }


// const num = 50

// switch (num) {
//     case 49:
//         console.log('49')
//         break
//     case 50:
//         console.log('50')
//         break
//     default: console.log('не чего')
//         break
// }

// ....................-----------=========================================

// ====---урок 14

// let num = 50

// while (num <= 55) {
//     console.log(num++)    
// }

// do {
//     console.log(num++) 
// }

// while (num <= 55) {
    
// }

// for (let i = 1; i <= 8; i++) {
//     console.log(i)
// }

// let num = 50

// for (let i = 1; i <= 8; i++) {
//     console.log(num)
//     num++
// }


// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         console.log('i = 6')
//         break
//     } else if (i === 8) {
//         console.log('i = 8')
//         continue   // пропускает число не останавливая цикл
//     } else {
//         console.log(i)
//         // break
//     }
// }

// ...======================-практика!!!!!!!!!!!

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// // personalMovieDB[1] = '2'

// const a = prompt('Один из просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '')
//       c = prompt('Один из просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d


// console.log(personalMovieDB)

// ....................-----------=========================================

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b
//         console.log('good')
//     } else {
//         console.log('none')
//         i--
//     }
// }

// if (personalMovieDB.count <= 10) {
//     console.log('(10')
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 24) {
//     console.log('10 - 25')
// } else if (personalMovieDB.count > 25) {
//     console.log('25++')
// } else {
//     console.log('err')
// }




// ....................-----------=========================================

// ====---урок 17


// const  str = 'test'

// const fruit = 'Some fruit'

// console.log(fruit.indexOf('fruit')) // = 5

// const logg = 'Hello world'

// console.log(logg.slice(6, 11)) // = world
// console.log(logg.slice(2)) // = llo world
// console.log(logg.slice(-8, -1)) // = lo worl
// console.log(logg.substring(6, 11)) // = world

// console.log(logg.substr(2, 2)) // = ll
// console.log(logg.substr(2, 5)) // = llo w

// ----

const num = 12.2
console.log(Math.round(num)) // = 12

const test = '12.2px'

console.log(parseInt(test)) // = 12
console.log(parseFloat(test)) // = 12.2







































































