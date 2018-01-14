'use strict';

// var userPoints = 0;
// console.log(userPoints);

// // console.log('Well, hello there');

// alert('Welcome to my trivia game to learn more about me, you can earn up to 7 points here.');

// var user = prompt('Lets start by getting your name');
// console.log('The user\'s name is' + user);

// while(!user){
//   user = prompt('I would be more comfortable sharing my information with you if you tell me your name, please tell me your name.');
// }
// if (user !== 'Brittany'){
//   alert('I\'m glad we don\'t have the same name!');
// }

// alert('Welcome ' + user + '! Very nice to meet you, lets go ahead and get started!');
// // -----------------FOR MY USE ONLY------------------
// var answer = prompt('First of all, do you think I\'m obsessed with dogs?' , 'type Yes or No').toUpperCase();
// console.log(answer);

// while(answer === 'TYPE YES OR NO'){
//   answer = prompt('please answer yes or no');
// }

// if (answer === 'YES' || answer === 'Y') {
//   userPoints++;
//   console.log(userPoints);
//   alert('Great job!');
    
// } else {
//   alert('I can\'t believe you forgot, I told you that I was on the first day we met!');
// }
// // -----------------FOR MY USE ONLY------------------

// var answer2 = prompt(user + ', do you think my dog\'s name is Na\'kita?' , 'type Yes or No').toUpperCase();

// console.log(answer2);

// while(answer2 === 'TYPE YES OR NO'){
//   answer2 = prompt('please answer yes or no');
// }

// if (answer2 === 'YES' || answer2 === 'Y'){
//   userPoints++;
//   console.log(userPoints);
//   alert('good job!');

// } else{
//   alert('Sorry, that\'s incorrect, on to the next question');
// }
// // -----------------FOR MY USE ONLY------------------
// var answer3 = prompt('Do I like cats?' , 'type Yes or No').toUpperCase();
  
// console.log(answer3);

// while(answer3 === 'TYPE YES OR NO'){
//   answer3 = prompt('please answer yes or no');
// }

// if (answer3 === 'NO' || answer3 === 'N'){
//   userPoints++;
//   console.log(userPoints);

// } else{
//   alert('You\'re incorrect!');
// }
// // -----------------FOR MY USE ONLY------------------
// var answer4 = prompt('Do I like pizza?' , 'type Yes or No').toUpperCase();

// console.log(answer4);

// while(answer4 === 'TYPE YES OR NO'){
//   answer4 = prompt('please answer yes or no');
// }

// if (answer4 === 'YES' || answer4 === 'Y'){
//   userPoints++;
//   console.log(userPoints);
// }
// else{
//     alert('You\'re incorrect!');
// }
// // -----------------FOR MY USE ONLY------------------
// var answer5 = prompt(user + ', Do I like wine? ' , 'type Yes or No').toUpperCase();

// console.log(answer5);

// while(answer5 === 'TYPE YES OR NO'){
//   answer5 = prompt('please answer yes or no');
// }

// if (answer5 === 'YES' || answer5 === 'Y'){
//   userPoints++;
//   console.log(userPoints);
// } else{
//   alert('Sorry, that\'s incorrect.');
// }
// // -----------------FOR MY USE ONLY------------------

// var guess = prompt('How many dogs do you think I want?').toUpperCase();
// console.log('before loop: ' + guess);

// var correctNumber = 7;
// var notDone = true;
// for (var guesses = 3; guesses > 0 && notDone; guesses--) {
//   console.log('inside loop: ' + guesses);
//   guess = parseInt(guess); // convert user input to number
//   if (guess === correctNumber) {
//     alert('You got the right number');
//     notDone = false;
//     console.log(notDone);
//   } else if (guesses === 1) {
//     alert ('You are out of guesses, I want 7 dogs!');
//   } else if (guess > correctNumber) {
//     guess = parseInt(prompt('Try again but a little lower'));
//     console.log(guess);
//   } else if (guess < correctNumber) {
//     guess = parseInt (prompt('Try again, but a little higher'));
//     console.log(guess);
//   }
// }
// console.log(correctNumber);
// -----------------FOR MY USE ONLY------------------



// --------------comment back in - keep out for now  --------------
// var answer7 = prompt('Can you guess one of the 6 contries I\'ve visted in the past year?').toUpperCase;
// console.log(answer7);

// var placeITraveled = ['mexico', 'croatia', 'canada', 'london', 'japan', 'iceland'];
// var i = 0;

// do {
//   i = i + 1;
//   placeITraveled = placeITraveled + i;
// } while (i < 6);
// --------------comment back in --- keep out for now --------------

for (var i = 0; i < correctName.length; i++) {
  console.log(correctName[i]);
} 

var guess1 = prompt('What countries have I been to?').toUpperCase();
console.log('before loop: ' + guess1);

var correctName = ['Mexico', 'Croatia', 'Canada', 'London','Japan', 'Iceland'];
var notDone1 = true;
for (var guesses1 = 6; guesses1 > 0 && notDone1; guesses1--) {
  console.log('inside loop: ' + guesses1);
  guess1 = parseInt(guess1); // convert user input to number
  if (guess1 === correctName) {
    alert('You\'re right! I went to Mexico, Croatia, Canada, London, Japan and Iceland.');
    notDone1 = false;
    console.log(notDone1);
  } else if (guess1 !== correctName) {
    guess1 = parseInt (prompt('Try again, you get a total of 6 tries!'));
    console.log(guess1);
  } else if (guesses1 === correctName) {
    alert ('You are out of guesses, I went to Mexico, Croatia, Canada, London, Japan and Iceland.');
    console.log(guesses1);
  }
}
    
//   } else if (guess1 < correctName) {
//     guess = parseInt (prompt('Try again, but a little higher'));
    // console.log(guess1);
//   }

// console.log(correctName);

// && notDone;


// if (placeITraveled === 'mexico'|| placeITraveled === 'croatia' || placeITraveled === 'canada' || placeITraveled === 'london'|| placeITraveled === 'japan'|| placeITraveled === 'iceland'){
//   userPoints++;
//   prompt('Yep! I\'ve been to Mexico, Croatia, Canada, London, Japan and Iceland');
// console.log(placeITraveled);



// // -----------------FOR MY USE ONLY------------------
// alert('you have ' + userPoints + ' points, great job, ' + user);
// // -----------------FOR MY USE ONLY------------------


// // var placeITraveled = ['mexico', 'croatia', 'canada', 'london', 'japan', 'iceland'];
// // for (var i = 0; i < placeITraveled.length; i++) {
// //   console.log(placeITraveled[i]);
// // }
// // while(placeITraveled){
// //   placeITraveled = prompt('Try again! You get 6 try\'s!');
// // }if (placeITraveled === 'mexico'|| placeITraveled === 'croatia' || placeITraveled === 'canada' || placeITraveled === 'london'|| placeITraveled === 'japan'|| placeITraveled === 'iceland'){
// //   userPoints++;
// //   prompt('Yep! I\'ve been to Mexico, Croatia, Canada, London, Japan and Iceland');
// // }else{
// //   alert('Try again');
// // }console.log(placeITraveled);

// // var answerPlaceITraveled){

// // }

























// for (var i= 7; i < answer6; i++){
//   console.log(answer6[i]);
// }


// if (answer6 === 7){
//   userPoints++;
//   console.log(userPoints);
// }else{
  

//     userPoints++;
//     console.log(userPoints);
// // }

// // var numberOfDogs = ['1', '2', '3', '4', '5', '6', '7'];

// for (var i = 7; i < numberOfDogs; i++) {
//   console.log(numberOfDogs[i]);
// }














