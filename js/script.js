// ПРактика

// let numberOfFilms

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    
//     while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
//     } 
// }

// // start()

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// function remeberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
//             personalMovieDB.movies[a] = b
//             console.log('good')
//         } else {
//             console.log('none')
//             i--
//         }
//     }
// }
// // remeberMyFilms()


// function detectPersonalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log('(посмотрел меньше 10')
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 24) {
//         console.log('посмотрел от 10 - 25')
//     } else if (personalMovieDB.count > 25) {
//         console.log('посмотрел больше 25')
//     } else {
//         console.log('че ты вообще тут ввел?')
//     }
// }

// // detectPersonalLevel()

// function showMyDB(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB)
//     }
// }

// showMyDB(personalMovieDB.privat)


// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ващ любимый жанр под номером, ${i}`)
//     }
// }

// writeYourGenres()





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

// const num = 12.2
// console.log(Math.round(num)) // = 12

// const test = '12.2px'

// console.log(parseInt(test)) // = 12
// console.log(parseFloat(test)) // = 12.2




// ....................-----------=========================================

// ====---урок 20

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }

// console.log(options.name)

// delete options.name

// console.log(options)

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)  //Свойство name имеет значение test Свойство colors имеет значение [object Object]    
// }

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
//     // Свойство name имеет значение test
//     // Свойство width имеет значение 1024
//     // Свойство height имеет значение 1024
//     // Свойство border имеет значение black
//     // Свойство bg имеет значение red
// }

// let counter = 0

// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//             counter++
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//         counter++
//     }

// }

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('testsuk')
//     }
// }

// options.makeTest()

// console.log(Object.keys(options)) // = [ 'name', 'width', 'height', 'colors' ]
// console.log(Object.keys(options).length) // = 4


// Дустроктуризация!!!!!!!

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('testsuk')
//     }
// }

// const {border, bg} = options.colors // деструктуризация


// console.log(border)
// console.log(bg)





// ....................-----------=========================================

// ====---урок 21

// const arr = [1, 2, 3, 6, 8]

// arr.pop() // удаляет последний элемент
// arr.push(777) // Добавляет в конец элемент


// // console.log(arr)

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr ) {
//     console.log(value)
// }

// const arr = [1, 2, 3, 6, 8]

// arr.forEach(function(item, i, arr) {
//     console.log(`${i + 1}: ${item} внутри ${arr}`)
// })

// const str = prompt('', '')
// const product = str.split(', ')
// console.log(product)





// const arr = [1, 32, 123, 66, 81]
// arr.sort() // =[ 1, 123, 32, 66, 81 ]
// console.log(arr)

// function compareNum(a, b) {
//     return a - b
// }

// arr.sort(compareNum) // = [ 1, 32, 66, 81, 123 ]

// console.log(arr)






// ....................-----------=========================================

// ====---урок 22


// let a = 5,
//     b = a
    
// b = b + 5

// const obj = {
//     a: 5,
//     b: 1
// }

// // const copy = obj // Ссылка
// // copy.a = 10 // { a: 10, b: 1 }
// // console.log(copy) 



// // Создаем копию объекта // как оказалось это поверстноя копия 
// function copy(mainObj) { 
//     let objCopy = {}
    
//     let key
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
    
//     return objCopy
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers)

// newNumbers.a = 10
// console.log(newNumbers)


// как один объект поместить в другой объект)

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const add = {
//     d: 17,
//     e: 20
// }


// console.log(Object.assign(numbers, add))
// const clone = Object.assign({}, add)

// clone.d = 222

// console.log(clone)


// Создаем копию массива

// const oldArray = ['a', 'b', 'c']
// const newArray = oldArray.slice() // Копируем Массив

// newArray[2] = 'hilo'

// console.log(oldArray)
// console.log(newArray)

// =-=-=-=-=-=--=-=-=-=--==---==--==---==--------------


// const video = ['youTube', 'vimeo', 'ruTube'],
//       blogs = ['wordPress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook']

// console.log(internet)


// =-=-=-=-=-=--=-=-=-=--==---==--==---==--------------

// вложили в функцию массив
// function log(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// const num = [2, 5, 7]

// log(...num)


// =-=-=-=-=-=--=-=-=-=--==---==--==---==--------------
// спрет оператор
// const array = ['a', 'b']
// const newArray = [...array]

// const q = {
//     one: 1,
//     two: 2
// }

// const newObj = {...q}




// ....................-----------=========================================

// ====---урок 23

// let str = 'some' // string
// let strObj = new String(str) // object

// console.log(typeof(str))
// console.log(typeof(strObj))


// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('hi')
//     }
// }

// // const jhon = {
// //     health: 100 
// // }

// // jhon.__proto__ = solder // устаревший метод
// // Object.setPrototypeOf(jhon, solder) // новый метод
// const jhon = Object.create(solder) // лучший метод



// jhon.sayHello()




// ПРактика================--------------=-=-=-=-=-=-= 24


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: () => {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        
//         while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
//         } 
//     },
//     remeberMyFilms: () => {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//             if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies[a] = b
//                 console.log('good')
//             } else {
//                 console.log('none')
//                 i--
//             }
//         }
//     },
//     detectPersonalLevel: () => {
//         if (personalMovieDB.count <= 10) {
//             console.log('(посмотрел меньше 10')
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count < 24) {
//             console.log('посмотрел от 10 - 25')
//         } else if (personalMovieDB.count > 25) {
//             console.log('посмотрел больше 25')
//         } else {
//             console.log('че ты вообще тут ввел?')
//         }
//     },
//     showMyDB: (hidden) => {
//         if(!hidden) {
//             console.log(personalMovieDB)
//         }
//     },
//     toggleVisibleMyDB: () => {
//         if(personalMovieDB.privat) {
//             personalMovieDB.privat = false
//         } else {
//             personalMovieDB.privat = true
//         }
//     },
//     writeYourGenres: () => {
//         for(let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ващ любимый жанр под номером, ${i}`)
            
//             if(genre === '' || genre === null) {
//                 console.log('не очень')
//                 i--
//             } else {
//                 personalMovieDB.genres[i - 1] = genre
//             }
            
//             personalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Любимы жанр ${i + 1} - это ${item}`)
//             })
//         }
//     }
// }



// ....................-----------=========================================

// ====---урок 26

// const num = 5

// console.log('https://vk.com/catalog/' + num)

// // 
// console.log(typeof(+'5')) // число


// //////////////////////////////=======---=-=-


// 0, '', null, undefined, NaN ==== false остальное true

// let switcher = null

// if(switcher == true) { // не работает потому что false
//     console.log('working') 
// } else {
//     console.log('false')
// }

// switcher = 1

// if(switcher == true) { // работает потому что true
//     console.log('working') 
// }




// ....................-----------=========================================

// ====---урок 26 Задачи на собеседовании

// __________________
// let x = 5 alert( x++ )= 5
// __________________
// [] + false - null + true = NaN
// __________________
// let x = 1; let y = x = 2; alert(y) = 2
// __________________
// console.log([] + 1 + 2) = 12
// __________________
// alert('1'[0]) = 1
// __________________
// console.log(2 && 1 && null && 0 && undefined) = null,   && запинается на джи
// console.log(2 || 1 || null || 0 || undefined)//  = 2,  || запинается на правде
// __________________
// console.log(0 && undefined && null) = 0
// __________________
// alert( null || 2 && 3 || 4) = 2, && - выше приоретет чем у ||





// ....................-----------=========================================

// ====---урок 31 


// const btn = document.querySelector('button');
// const blockTest = document.querySelector('.block__test');
// const overlay = document.querySelector('.overlay')

// btn.onclick = function() {
//     alert('click') код говно
// }

// btn.addEventListener('click', () => {
//     alert('ccllccll')
// })

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e)
//     blockTest.style.width = '120px'
// })


// btn.addEventListener('mouseout', () => {
//     blockTest.style.width = '550px'
// })

// // let i = 0
// const deleteElement = (e) => {
//     // e.target.remove()
//     console.log(e.currentTarget)
//     console.log(e.type)
//     // i++
//     // if(i === 1) {
//     //     btn.removeEventListener('click', deleteElement)
//     // }
// }

// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)




// ....................-----------=========================================

// ====---урок 32


// console.log(document.querySelector('#current'))
// console.log(document.querySelector('[data-current="3"]'))



const script = document.createElement('script');

script.src = 'js/test.js';
document.body.append(script)



































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































