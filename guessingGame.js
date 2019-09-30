console.log("Hello There");
//Generates Variables
var answer = Math.floor(Math.random() * 20) +1; //+1 makes it up to 20 instead of 19
var count = 0;
var guesses = [];

console.log(answer); //Dubugging purposes

//Setting Elements
let countElement = document.getElementById("count");
let restartBtn = document.getElementById("restart");
let checkBtn = document.getElementById("check");
let cheatBtn = document.getElementById("cheat");
let pastGuesses = document.getElementById("pastGuesses");
let feedBack = document.getElementById("demo");
let guessList = document.getElementById("guessList");
let userGuesses = document.getElementById("userGuess");
let image = document.getElementById("img");

image.style.display="none";
countElement.style.display= "none";
restartBtn.style.visibility="hidden";

//Checks guesses and tells user if low, high, or correct
function checkGuess() {
    console.log("You clicked the button");
    console.log(answer);
    countElement.style.display= "block";
    var userGuess = userGuesses.value;
    guesses.push(userGuess);
    console.log(guesses);
    console.log(userGuess);
    feedBack.style.visibility="hidden";
    image.setAttribute("src", "loadingGif.gif");
    image.style.display="inline"; //Might need to be inline
    checkBtn.disabled=true;
    setTimeout(() => {
        image.style.display="none";
        feedBack.style.visibility="visible";
        if (userGuess < answer && userGuess >= 0) {
            feedBack.innerHTML ="Guess is too low";
        }
        else if (userGuess > answer && userGuess <= 20) {
            feedBack.innerHTML ="Guess is too high";
        }
         else if (userGuess == answer) {
            feedBack.innerHTML ="You guessed it! You won the game";
            userGuesses.style.visibility="hidden";
            restartBtn.style.visibility="visible";
            //document.getElementById("check").style.visibility="hidden";
            //document.getElementById("guessList").style.visibility="hidden";
            //document.getElementById("cheatBtn").style.visibility="hidden";
        }
        else if (userGuess > 20 || userGuess < 0){
        feedBack.innerHTML="Guess is out of range, must be between 0 and 20!";
        }
        else if (isNaN(userGuess)) {
            feedBack.innerHTML = "Guess must be a number. Try again."
        }
        count ++;
        countElement.innerHTML='Attempt: ' + count;

        checkBtn.disabled=false;
    }, 3000)
}

//Shows the user past guesses
function showList() {
    console.log(guesses);
    pastGuesses.style.visibility="visible";
    pastGuesses.innerHTML = "Guess History: " + guesses; 
}

//Shows user answer 
function cheat() {
    console.log(answer);
    cheatBtn.style.visibility="visible";
    cheatBtn.innerHTML = "Answer is: " + answer;
}

//Unhides every element hidden from win
function restart() {
    answer = Math.floor(Math.random() * 20);
    count = 0;
    guesses = [];
    userGuesses.style.visibility="visible";
    cheatBtn.style.visibility="hidden";
    restartBtn.style.visibility="hidden";
    feedBack.style.visibility="hidden";
    checkBtn.style.visibility="visible";
    cheatBtn.style.visibility="hidden";
    pastGuesses.style.visibility="hidden";
    document.getElementById("count").innerHTML = 'Attempt: ' + count;
}