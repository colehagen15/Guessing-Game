console.log("Hello There");
//Generates Variables
var answer = Math.floor(Math.random() * 20);
var count = 0;
var guesses = [];

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
    image.style.display="inline";
    checkBtn.disabled=true;
    setTimeout(() => {
        image.style.display="none";
        feedBack.style.visibility="visible";
        if (userGuess < answer) {
            feedBack.innerHTML ="Guess is too low";
        }
        else if (userGuess > answer) {
            feedBack.innerHTML ="Guess is too high";
        }
         else {
            feedBack.innerHTML ="You guessed it! You won the game";
            userGuesses.style.visibility="hidden";
            restartBtn.style.visibility="visible";
            //document.getElementById("check").style.visibility="hidden";
            //document.getElementById("guessList").style.visibility="hidden";
            //document.getElementById("cheatBtn").style.visibility="hidden";
        }
        count ++;
        countElement.innerHTML='Attempt: ' + count;

        checkBtn.disabled=false;
    }, 3000)
}

//Shows the user past guesses
function showList() {
    console.log(guesses);
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
    document.getElementById("count").innerHTML = 'Attempt: ' + count;
}