'use strict';

var userPoints = 0;
console.log(userPoints);

alert('Welcome to my trivia game to learn more about me, you can earn up to 7 points here.');

var user = prompt('Lets start by getting your name');
console.log('The user\'s name is' + user);

function updateUser() {
  while(!user){
    user = prompt('I would be more comfortable sharing my information with you if you tell me your name, please tell me your name.');
  }
  if (user !== 'Brittany'){
    alert('I\'m glad we don\'t have the same name!');
  }
}
updateUser();

alert('Welcome ' + user + '! Very nice to meet you, lets go ahead and get started!');

var answer = prompt('First of all, do you think I\'m obsessed with dogs?' , 'type Yes or No').toUpperCase();
console.log(answer);

function firstQuestion() {
  while(answer === 'TYPE YES OR NO'){
    answer = prompt('please answer yes or no');
  }
  if (answer === 'YES' || answer === 'Y') {
    userPoints++;
    console.log(userPoints);
    alert('Great job!');
  } else {
    alert('I can\'t believe you forgot, I told you that I was on the first day we met!');
  }
}
firstQuestion();
console.log(answer);

var answer2 = prompt(user + ', do you think my dog\'s name is Na\'kita?' , 'type Yes or No').toUpperCase();

console.log(answer2);

function secondQuestion() {
  while(answer2 === 'TYPE YES OR NO'){
    answer2 = prompt('please answer yes or no');
  }
  if (answer2 === 'YES' || answer2 === 'Y'){
    userPoints++;
    console.log(userPoints);
    alert('good job!');
  } else{
    alert('Sorry, that\'s incorrect, on to the next question');
  }
}
secondQuestion();
console.log(answer2);



var answer3 = prompt('Do I like cats?' , 'type Yes or No').toUpperCase();

console.log(answer3);

function thirdQuestion() {
  while(answer3 === 'TYPE YES OR NO'){
    answer3 = prompt('please answer yes or no');
  }
  if (answer3 === 'NO' || answer3 === 'N'){
    userPoints++;
    console.log(userPoints);
  } else{
    alert('You\'re incorrect!');
  }
}
thirdQuestion();
console.log(answer3);


var answer4 = prompt('Do I like pizza?' , 'type Yes or No').toUpperCase();

console.log(answer4);

function fourthQuestion() {
  while(answer4 === 'TYPE YES OR NO'){
    answer4 = prompt('please answer yes or no');
  }
  if (answer4 === 'YES' || answer4 === 'Y'){
    userPoints++;
    console.log(userPoints);
  }
  else{
    alert('You\'re incorrect!');
  }
}
fourthQuestion();
console.log(answer4);


var answer5 = prompt(user + ', Do I like wine? ' , 'type Yes or No').toUpperCase();

console.log(answer5);

function fifthQuestion() {
  while(answer5 === 'TYPE YES OR NO'){
    answer5 = prompt('please answer yes or no');
  }
  if (answer5 === 'YES' || answer5 === 'Y'){
    userPoints++;
    console.log(userPoints);
  } else{
    alert('Sorry, that\'s incorrect.');
  }
}
fifthQuestion();
console.log(answer5);



var guess = prompt('How many dogs do you think I want?').toUpperCase();
console.log('before loop: ' + guess);

var correctNumber = 7;
var notDone = true;

function sixthQuestion() {
  for (var guesses = 3; guesses > 0 && notDone; guesses--) {
    console.log('inside loop: ' + guesses);
    guess = parseInt(guess);
    if (guess === correctNumber) {
      alert('You got the right number');
      notDone = false;
      console.log(notDone);
      userPoints++;
    } else if (guesses === 1) {
      alert ('You are out of guesses, I want 7 dogs!');
    } else if (guess > correctNumber) {
      guess = parseInt(prompt('Try again but a little lower'));
      console.log(guess);
    } else if (guess < correctNumber) {
      guess = parseInt (prompt('Try again, but a little higher'));
      console.log(guess);
    }
  }
}
sixthQuestion();
console.log(correctNumber);


var travelSpot = 0;

function seventhQuestion() {
  while (travelSpot < 5){
    var whereVacation = prompt('Can you guess one of the 6 countries I\'ve visted in the past year?');
    console.log(whereVacation);
    var location2 = ['mexico','london','croatia'];
    if (whereVacation === location2[0] || whereVacation === location2[1] || whereVacation === location2[2] || whereVacation=== location2[3]){
      alert('Good Job! I have been to Mexico, London and Croatia this year!');
      console.log(whereVacation);
      userPoints++;
      break;
    }
    if (whereVacation !== location.toLowerCase()){
      alert('Sorry, try again!');
      travelSpot++;
    }
  }
}
seventhQuestion();
console.log(travelSpot);
alert('Great job! You have ' + userPoints +' points!');
