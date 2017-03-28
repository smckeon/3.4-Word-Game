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


var commonWords = require('./common-words.js');

commonWords = commonWords.filter(function(word){
  return word.length >= 3;
})

var randomWord;
var randomWordContainer = document.getElementById('random_word');

var remainingGuesses;
var guessesRemaining = document.getElementById('guesses_remaining');

var correctGuesses;

document.getElementById('letter').addEventListener('keyup', letterCheck);

function startGame(){
  remainingGuesses = 8;
  randomWord = commonWords[Math.floor(Math.random() * commonWords.length)].toLowerCase();
  console.log(randomWord);
  correctGuesses = 0;
  guessesRemaining.textContent = remainingGuesses;

  randomWordContainer.textContent = '';

  for (var i = 0; i < randomWord.length; i++){
    var span = document.createElement('span');
    span.textContent = '_';
    randomWordContainer.appendChild(span);
  }
}

function letterCheck(e){
  if (e.which <= 90 && e.which >= 65){
    var letter = e.key;
    remainingGuesses -= 1;
    if (randomWord.indexOf(letter) !== -1){
      for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] == letter){
          document.getElementById('random_word').children[i].textContent = letter;
          document.getElementById('letter').value = '';
          correctGuesses += 1;
        }
      }

      } else {
        alert('Please try again');
        document.getElementById('letter').value = '';
      }

      } else {
        alert('Please input a letter.');
        document.getElementById('letter').value = '';
      }


        if (correctGuesses === randomWord.length) {
        gameWon();
      }

        if(remainingGuesses == 0){
        gameOver();
      }

      guessesRemaining.textContent = remainingGuesses;
}


function gameWon(){
  alert('You win! The correct word was ' + randomWord + '.');
  startGame();

}

function gameOver(){
  alert('gg');
  startGame();
}

startGame();
