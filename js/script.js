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





// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = 'false';
//     document.body.append(script);
// }

// loadScript('js/test.js')
// loadScript('js/some.js')




// ....................-----------=========================================

// ====---урок 37

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('#first')

// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(0))
// console.log(btns[0].classList.add('red', 'ichoClasss'))
// console.log(btns[0].classList.remove('blue'))
// console.log(btns[0].classList.toggle('blue'))

// btns.forEach(() => {
    
// })


// if (btns[1].classList.contains('red')) {
//     console.log('есть красный класс')
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
        
//         btns[1].classList.add('red')
//     } else {
//         btns[1].classList.remove('red') 
//     }
// btns[1].classList.toggle('red')
// })

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('lol')) {
//         btns[1].classList.toggle('boom')
//     }
// })

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('hi')
//     }
// })


// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log('wow')
//     })
// })

// const btn = document.createElement('button');
// btn.classList.add('red')
// wrapper.append(btn)







// ====---урок 39


// const timerId = setTimeout(function() {
//     console.log('hi')
// }, 5000)

// const timerId = setTimeout(function(text) {
//     console.log(text)
// }, 5000, 'hi')


// function logger () {
//     console.log('hi')
// }

// const timerId = setTimeout(logger, 3000)

// clearInterval(timerId)



// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// function myAnimation() {
    
//     const elem = document.querySelector('.box')
//     let pos = 0;
    
//     const id = setInterval(frame, 10)
    
//     function frame() {
//         if(pos == 300) {
//             clearInterval(id)
//         } else {
//             pos++
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }
//     }
// }

// btn.addEventListener('click', myAnimation)




// ....................-----------=========================================

// ====---урок 40



// const now = new Date()


// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();


// alert(`Цикл отработал за ${end - start} милисекунд`)





// ....................-----------=========================================

// ====---урок 42


// const box = document.querySelector('.box');
// const btn = document.querySelector('.bbbn')
// // const width = box.clientWidth;
// // const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width, height)


// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px'
//     // box.classList.add('pops42--active')
//     // box.style.height = 'auto'
//     console.log(box.scrollTop)
// })


// console.log(box.getBoundingClientRect().top)




// ....................-----------=========================================

// ====---урок 45


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hi = function() {
//         console.log(`hi ${this.name}`)
//     }
// }


// const ivan = new User('Ivan', 28)
// const alex = new User('Lexa', 20)

// ivan.hi()
// alex.hi()

// console.log(ivan)
// console.log(alex)





// ....................-----------=========================================

// ====---урок 46


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return this.a + this.b
//     }
//     console.log(sum())
// }

// showThis(4, 5)

// Обычная фунция: this = window, но если стоит 'use strict' то будет undefined


// const btn = document.querySelector('button')

// btn.addEventListener('click', function() {
//     // console.log(this)
//     this.style.backgroundColor = 'red'
//     if(this.style.backgroundColor === 'red') {
//         this.style.backgroundColor = 'black'
//     } else if(this.style.backgroundColor === 'black') {
//         this.style.backgroundColor = 'blue'
//     }
// })



// ....................-----------=========================================

// ====---урок 47


// class Rectangle {
//     constructor(height, width) {
//         this.height = height
//         this.width = width
//     }
    
//     calcArea() {
//         return this.height * this.width
//     }
    
// }

// const square = new Rectangle(11, 44)


// console.log(square.calcArea())





// ....................-----------=========================================

// ====---урок 52 AJAX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// 52-01 - сиарая версия! неиспользуется но встречается


// const inputRub = document.querySelector('#rub');
// const inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
    
//  // request.open(method, url, async, login, pass); пример что заполняет
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
    
//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value =  (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//              inputUsd.value = 'что то пошло не так, уходи!'
//         }
//     });
    
    
// })



// ....................-----------=========================================

// ====---урок 52

// ....................-----------========================================= анимация при закрытии и открытии блока
// const btn = document.querySelector('.test__box-btn');
// const box = document.querySelector('.test__box-el')

// btn.addEventListener('click', () => {
//     showBox()
//     hiddenBox()
// })

// function showBox() {
//     if (!box.classList.contains('test__box-el-anim') && !box.classList.contains('test__box-el--act')) {
//         box.classList.add('test__box-el-anim')
//         setTimeout(() => {
//             box.classList.add('test__box-el--act');
//         }, 300)
//     }    
// }

// function hiddenBox() {
//     if (box.classList.contains('test__box-el-anim') && box.classList.contains('test__box-el--act')) {
//         box.classList.remove('test__box-el--act');
//         setTimeout(() => {
//             box.classList.remove('test__box-el-anim')
//         }, 300)
//     }
// }







// ....................-----------=========================================

// ====---урок 57



// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });


// console.log(shortNames)




// const answers = ['IvAn', 'Ann', 'KsenIa', 'VoldEmMrt'];

// const res = answers.map(item => item.toLocaleLowerCase())

// const some = [4, 'qwe', 'qefsdgbaetbn']

// console.log(some.every(item => typeof(item) === 'number'))


// const arr = [1, 14, 22, 33, 11]

// //                        =0   каждый элемент
// const result = arr.reduce((sum, current) => {
//     return sum + current
// })

// console.log(result)





// ....................-----------=========================================

// ====---урок 64 сохраняем данные после перезагрузки


// localStorage.setItem('number', 5)
// localStorage.getItem('number')
// localStorage.removeItem('number')
// localStorage.clear()

// const checkbox = document.querySelector('#checkbox');
// const form = document.querySelector('form');
// const change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true
// }

// if(localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = 'red'
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true) 
// });


// change.addEventListener('click', () => {
//     if(localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg')
//         form.style.backgroundColor = '#fff'
//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundColor = 'red'
//     }
// });



// const persone = {
//     name: 'Alex',
//     age: 25
// }

// const serializedPesone = JSON.stringify(persone);

// localStorage.setItem('alex', serializedPesone);

// console.log(JSON.parse(localStorage.getItem('alex')))



// ....................-----------=========================================

// ====---урок 65













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































