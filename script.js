//ONLY ODDS SECTION
//Make an array of numbers
//Write for loop with nested if statement that returns only the odd numbers from the array
//Run and make sure console is showing what is expected

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i = 0; i < numArr.length; i++){
//   if(i % 2 === 1){
//     console.log(i)
//   }
// }




//VOWEL VS CONSONAT SECTION
//Make my vars to track num of cons and vowels
//Make array 
//Iterate through array 
//If statement that finds vowels or cons and adds them to appropriate list
//Show list in console

// let vowelCount = 0;
// let consCount = 0;

// const wordArr = `hello`;

// for(let i = 0; i <= wordArr.length; i++){
//   if(wordArr[i] === `a` || wordArr[i] === `e` || wordArr[i] === `i` || wordArr[i] === `o` || wordArr[i] === `u`){
//     vowelCount++;
//   }
//   else if(wordArr[i] !== `a` || wordArr[i] !== `e` || wordArr[i] !== `i` || wordArr[i] !== `o` || wordArr[i] !== `u`){
//     consCount++
//   }
// }
// console.log(`hello has ${vowelCount} vowels and ${consCount} consonats`);




//REVERSED ARRAYS SECTION
//Make a number array
//Make a empty for reveresed
//Make a for loop that takes the value from the first array and adds it into the empty array backwards
//Run to make sure it works

// const numArr = [1, 2, 3, 4, 5 ];
// const revArr = [];
// for(let i = numArr.length -1; i >= 0; i--){
//   revArr.push(numArr[i]);
// }
// console.log(revArr);





//FIZZBUZZ SECTION
//Make a num variable populating it with 100 numbers
//Make for loop to iterate through the 100
//Find what is divisable with 3 and 5 and give appropriate name for them 
//Show the rest of the list that isnt FIZZ BUZZ OR FIZZBUZZ
//Check console to make sure what is expected is seen

// let num = 100;
// for(let i = 0; i < 100; i++){
//   if(i % 3 == 0 && i % 5 == 0){
//     console.log(`FizzBuzz`);
//   }
//   else if(i % 3 == 0){
//     console.log(`Fizz`);
//   }
//   else if(i % 5 == 0){
//     console.log(`Buzz`);
//   }
//   else{
//     console.log(i);
//   }
// }