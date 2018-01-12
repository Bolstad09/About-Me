'use strict';

var userPoints = 0;
console.log(userPoints);

console.log('Well, hello there');

alert('Welcome to my trivia game to learn more about me, you can earn up to 5 points here.');
// ---------------------FOR MY OWN USE -------------------------------
var user = prompt('Before I share information about me, what is your name?');

alert('Welcome ' + user + '! Very nice to meet you, lets go ahead and get started!');
// ---------------------FOR MY OWN USE -------------------------------
// var beginningStatement = alert('Alright ' + user + ', here we go!').toLowerCase();

// console.log(beginningStatement);
// // if (beginningStatement === 'yes' || beginningStatement === 'y'){
// //     else {
// //     alert('Okay, I\'ll wait...');
// ---------------------FOR MY OWN USE -------------------------------
var answer = prompt('First of all, do you think I\'m obsessed with dogs?' , 'type Yes or No').toUpperCase();
   

console.log(answer);

//now we need to check if the users answer is correct and this is how we do it..
//we also need to find out what is correct
//find out what the answer is
//we need to use toLowerCase or toUpperCase
//we want to use a confirm box

if (answer === 'YES' || answer === 'Y') {
    //if it's correct give them a point
    userPoints++;
console.log(userPoints);
    
} else {
    // if it's not correct, tell them to try again
    alert('I can\'t believe you forgot, I told you that I was on the first day we met!');
}

// ---------------------FOR MY OWN USE -------------------------------
var answer2 = prompt(user + ', do you think my dog\'s name is Na\'kita?' , 'type Yes or No').toUpperCase();
    

console.log(answer2);

if (answer2 === 'YES' || answer2 === 'Y'){
    userPoints++;
console.log(userPoints);
    
} else{
    alert('Sorry, that\'s incorrect, on to the next question');
}
// ---------------------FOR MY OWN USE -------------------------------
var answer3 = prompt('Do I like cats?' , 'type Yes or No').toUpperCase();
  
    console.log(answer3);

if (answer3 === 'NO' || answer3 === 'N'){
    userPoints++;
    console.log(userPoints);
    
} else{
    alert('You\'re incorrect!');
} 
// ---------------------FOR MY OWN USE -------------------------------
var answer4 = prompt('Do I like pizza?' , 'type Yes or No').toUpperCase();
    

    console.log(answer4);
    

if (answer4 === 'YES' || answer4 === 'Y'){
    userPoints++;
    console.log(userPoints);
    
}
// ---------------------FOR MY OWN USE -------------------------------
var answer5 = prompt(user + ', Do I like wine? ' , 'type Yes or No').toUpperCase();
    

    console.log(answer5);

if (answer5 === 'YES' || answer5 === 'Y'){
    userPoints++;
console.log(userPoints);
    
} else{
    alert('Sorry, that\'s incorrect, let\'s see what your score is!');
}
// ---------------------FOR MY OWN USE -------------------------------
alert('you have ' + userPoints + ' points, great job, ' + user);








