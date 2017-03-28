var commonWords = require('./common-words.js');

(function(){
  "use strict";


commonWords = commonWord.filter(function(word){
  return word.length >= 3;
});

  console.log(commonWords);


// var randomWord

function startGame(){
  remainingGuesses = 8;
  randomWord = commonWords[Math.floor(Math.random() * commonWords.length)].toLowerCase();
  console.log(randomWord);
  correctGuesses = 0;
  guessesRemainingHolder.textContent = remainingGuesses;

  randomWordHolder.textContent = '';

  for (var i = 0; i < randomWord.length; i++){
    var span = document.createElement('span');
    span.textContent = '_';
    randomWordHolder.appendChild(span);
  }
}

});
/*ASK OURSELVES WHAT ARE THE SMALL TASKS WE NEED TO TAKE */


// 1. CHOOSE A WORD
// 2. CHOOSE A WORD THAT IS LONGER THAN THREE CHARACTERS
// WHICH WOULD EQUATE TO
// 1. FILTER OUT ALL THE WORDS 3 CHARS OR SMALLER
// 2. CHOOSE A WORD
// 3. CUT WORD INTO INDIVIDUAL CHARS

// ** think about what tools we have in javascript to accomplish our small task **

// 1. FILTER OUT ALL THE WORDS 3 CHARS OR SMALLER
// ** possibly use a functional iterator to create a new array - filter()? **

// commonWords = commonWords.filter(function(word){
//   return word.length >= 3;
// });

// 2. CHOOSE A RANDOM WORD
// ** but how do i choose a random word from an array in javascript?

// 3. CUT WORD INTO INDIVIDUAL CHARS
// splice filter charAt .. look these up

// NOW WE ATTEMPT TO WRITE IN CODE. THINK SMALL THEN THINK SMALLER.

// DO A LOT OF THINKING. JS IS THINKING AND THEN CODING, NOT VICE VERSA
