'use strict';

var userPoints = 0;
    console.log(userPoints);

    console.log('Well, hello there');

alert('Welcome to my trivia game to learn more about me, you can earn up to 5 points here.');

var user = prompt('Before I share information about me, what is your name?');
    
alert('Welcome ' + user + '! Very nice to meet you, lets go ahead and get started!');

var answer = prompt('First of all, do you think I\'m obsessed with dogs?' , 'type Yes or No').toUpperCase();
   
    console.log(answer);

if (answer === 'YES' || answer === 'Y') {
    
    userPoints++;
    console.log(userPoints);
    
} else {
    
    alert('I can\'t believe you forgot, I told you that I was on the first day we met!');
}


var answer2 = prompt(user + ', do you think my dog\'s name is Na\'kita?' , 'type Yes or No').toUpperCase();
    
    console.log(answer2);

if (answer2 === 'YES' || answer2 === 'Y'){
    userPoints++;
    console.log(userPoints);
    
} else{
    alert('Sorry, that\'s incorrect, on to the next question');
}

var answer3 = prompt('Do I like cats?' , 'type Yes or No').toUpperCase();
  
    console.log(answer3);

if (answer3 === 'NO' || answer3 === 'N'){
    userPoints++;
    console.log(userPoints);
    
} else{
    alert('You\'re incorrect!');
} 

var answer4 = prompt('Do I like pizza?' , 'type Yes or No').toUpperCase();
    
    console.log(answer4);
    

if (answer4 === 'YES' || answer4 === 'Y'){
    userPoints++;
    console.log(userPoints);
}

var answer5 = prompt(user + ', Do I like wine? ' , 'type Yes or No').toUpperCase();
    
    console.log(answer5);

if (answer5 === 'YES' || answer5 === 'Y'){
    userPoints++;
    console.log(userPoints);
} else{
    alert('Sorry, that\'s incorrect, let\'s see what your score is!');
}

    alert('you have ' + userPoints + ' points, great job, ' + user);








