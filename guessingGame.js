$(document).ready(function(){

console.log("Hello There");

//Generates Variables
var answer = Math.floor(Math.random() * 20) +1; //+1 makes it up to 20 instead of 19
var count = 0;
var guesses = [];

console.log(answer); //Dubugging purposes

//Setting Elements in jQuery
let countElement = $("#count");
let restartBtn = $("#restart");
let checkBtn = $("#check");
let cheatText = $("#cheat");
let pastGuesses = $("#pastGuesses");
let feedBack = $("#demo");
let guessList = $("#guessList");
let userGuesses = $("#userGuess");
let image = $("#img");
let cheatBtn = $("#cheatBtn");
let hedgehogPic = $("#hedgehog");

hedgehogPic.hide();
image.hide();
countElement.hide();
restartBtn.hide();

//Checks guesses and tells user if low, high, or correct
checkBtn.click(function() {
    console.log("You clicked the button");
    console.log(answer);
    countElement.show();
    var userGuess = userGuesses.val();
    guesses.push(userGuess);
    console.log(guesses);
    console.log(userGuess);
    feedBack.hide();
    image.fadeIn("slow");
    checkBtn.attr("disabled", true);
    setTimeout(() => {
        image.hide();
        feedBack.fadeIn("slow");
        if (userGuess < answer && userGuess >= 0) {
            feedBack.text("Guess is too low");
        }
        else if (userGuess > answer && userGuess <= 20) {
            feedBack.text("Guess is too high");
        }
         else if (userGuess == answer) {
            hedgehogPic.show();
            feedBack.text("You guessed it! You won the game");
            feedBack.animate({
                fontSize: '2em', 
            }, "fast");
            userGuesses.hide();
            restartBtn.show();
            restartBtn.animate({
                fontSize: '2em', 
            }, "slow");
        }
        else if (userGuess > 20 || userGuess < 0){
        feedBack.text("Guess is out of range, must be between 0 and 20!");
        }
        else if (isNaN(userGuess)) {
            feedBack.text("Guess must be a number. Try again.");
        }
        count ++;
        countElement.text('Attempt: ' + count);

        checkBtn.attr("disabled",false);
    }, 3000)
});

//Shows the user past guesses
guessList.click(function() {
    console.log(guesses);
    pastGuesses.show();
    pastGuesses.text("Guess History: " + guesses); 
});

//Shows user answer 
cheatBtn.click(function() {
    console.log(answer);
    cheatText.show();
    cheatText.text("Answer is: " + answer);
});

//Unhides every element hidden from win
$("#restart").click(function () {
    answer = Math.floor(Math.random() * 20);
    count = 0;
    guesses = [];
    userGuesses.show();
    cheatText.hide();
    restartBtn.hide();
    feedBack.hide();
    checkBtn.show();
    pastGuesses.hide();
    countElement.hide();
    hedgehogPic.hide();
});

});