


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

// let j = 0

// while (j < 2) {
//     const a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b
//         console.log('good')
//     } else {
//         console.log('none')
//         i--
//     }
//     j++
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






























