//Easy Going
// Write a for loop that will log the numbers 1 through 20.

// for(let i = 1; i <= 20; i++) {
//   console.log(i)
// }

//Get Even
//Write a for loop that will log only the even numbers in 0 through 200

// for (let i = 0; i <= 200; i++) {
//   if(i % 2 === 0) {
//     console.log(i)
//   }
// }

// Fizz Buzz
//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.

// * Write a Javascript Application that logs all numbers from 1 - 100.
// * If a number is divisible by 3, log "Fizz" instead of the number.
// * If a number is divisible by 5, log "Buzz" instead of the number.
// * If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number

// for (let i = 1; i <= 100; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log(i, 'FIZZBUZZ')
//   }
//   if(i % 3 === 0) {
//     console.log(i, 'FIZZ')
//   }
//   if(i % 5 === 0) {
//     console.log(i, 'BUZZ')
//   }
// }

// Wild Wild Life
// * Use the following arrays to answer the questions below (name, species, age, hometown).

// * You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // * Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// plantee[2] = 1;
// console.log(plantee)

// // * Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// for(let i = 0; i < wolfy.length; i ++){
//   if(wolfy[i] === "Yukon Territory"){
//     wolfy[i] = 'Gotham City'
//   }
// }
// console.log(wolfy)

// // * Give D'Art a second hometown by adding "Hawkins"
// dart.push('Hawkins')
// console.log(dart)

// // * Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"

// for(let i = 0; i < wolfy.length; i ++){
//   if(wolfy[i] === "Wolfy"){
//     wolfy[i] = 'GameBoy'
//   }
// }
// console.log(wolfy)


// Yell at the Ninja Turtles
// * Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// * Use a for of loop to call toUpperCase() on each of them and print out the result.

// const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// let index = 0;
// for(let i of ninja) {
//   ninja[index] = i.toUpperCase()
//   index ++
// }
// console.log(ninja)

//Methods, Revisited

//const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// * Console log the index of Titanic.

//console.log(favMovies.indexOf('Titanic'))

// // sort()

//console.log(favMovies.sort()) // Its sort the array in assending order

// // pop()

//console.log(favMovies.pop())  // It removes the last element from the Array

// //push()

//favMovies.push('Guardians of the Galaxy') // It adds new element at end of the array

// // reverse()
//favMovies.reverse() // It reverse the array 

// //shift()
//console.log(favMovies.shift()) // It removes the last element from the array.

// //unshift()
// console.log(favMovies.unshift('You')) // It add new element at bignning of the array
// console.log(favMovies)

//splice() - Django Unchained" and add "Avatar"

//let index = 0;
//for(let i of favMovies) {
 // if(i ==='Django Unchained') {
    //favMovies.splice(index, 1, 'Avatar') // using splice() we can remove a specific element and add element on specific index
  //}
  //if(index > favMovies.length){
  //  break
 // } 
  
//index ++
//}

//console.log(favMovies)

//slice()
//slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)

//let half = (favMovies.length -1) / 2;
//console.log(favMovies.slice(half)) // we sliced the array in half permanently. 

//console.log(favMovies.indexOf('Fast and Furious'))

// the index of the 'Fast and Furious' is still 18. hmm ...


// Where is Waldo
// With the following multi-dimensional array:
/* Remove Eggbert (hint look at the slice/splice methods).
Change "Neff" to "No One".
Access and console.log "Waldo". */


// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                       ["Lucinda", "Jacc", "Neff", "Snoop"],
//                       ["Petunia", ["Baked Goods", "Waldo"]]];


// /* Remove Eggbert (hint look at the slice/splice methods). */
// const remove = whereIsWaldo.splice(1, 1,)
// console.log(remove)
// console.log((whereIsWaldo))


// /* Remove Eggbert (hint look at the slice/splice methods).
// Change "Neff" to "No One".
// Access and console.log "Waldo". */
// const flatWhereIsWaldo = whereIsWaldo.flat()
// let index = 0;
// for(let i of flatWhereIsWaldo) {
//  if(i ==='Neff') {
//     flatWhereIsWaldo.splice(index, 1, 'No one') // using splice() we can remove a specific element and add element on specific index
//   }
//   if(index > flatWhereIsWaldo.length){
//    break
//  } 
//  index++
// }
// console.log(flatWhereIsWaldo)


/*Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random. */
 /*
let logs = ''
 for (let i = 0; i <=20; i++) {
  logs += 'Love me, per me! HSSSSSS!  '
  console.log("...human... why you taking pictures of me...?", "...the catnip made me do it...",  "...why does the red dot always get away...?")
 }

 console.log(logs)
 */

 // Find the Median
// Find the median number in the following nums array, then console.log that number.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let total = 0 ;
for (let i = 0; i < nums.length -1; i++){
total +=nums[i]
console.log(total)
}
const median = total / nums.length
console.log(median)