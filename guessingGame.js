console.log("Hello There");
//Generates random number, 0-20
var answer = Math.floor(Math.random() * 20);

//Tracks guess history
var guesses = [];
//Counts guesses
var count = 0;
document.getElementById("restart").style.visibility="hidden";
//Checks guesses and tells user if low, high, or correct
function checkGuess() {
    console.log("You clicked the button");
    console.log(answer);
    var userGuess = document.getElementById("userGuess").value;
    guesses.push(userGuess);
    console.log(guesses);
    console.log(userGuess);
    //documents.getElemenetByID("demo").style.visibility="hidden";
    var docs = document.getElementById("img");
    docs.setAttribute("src", "loadingGif.gif");
    document.getElementById("img").style.visibility="visible";
    document.getElementById("check").disabled=true;
    setTimeout(() => {
        document.getElementById("img").style.visibility="hidden";
        if (userGuess < answer) {
            document.getElementById("demo").innerHTML ="Guess is too low";
        }
        else if (userGuess > answer) {
            document.getElementById("demo").innerHTML ="Guess is too high";
        }
         else {
            document.getElementById("demo").innerHTML ="You guessed it! You won the game";
            document.getElementById("userGuess").style.visibility="hidden";
            document.getElementById("restart").style.visibility="visible";
            //document.getElementById("check").style.visibility="hidden";
            //document.getElementById("guessList").style.visibility="hidden";
            //document.getElementById("cheatBtn").style.visibility="hidden";
        }
        count ++;
        document.getElementById("count").innerHTML = 'Attempts: ' + count;
        document.getElementById("check").disabled=false;
    }, 3000)
}

//Shows the user past guesses
function guessList() {
    console.log(guesses);
    document.getElementById("pastGuesses").innerHTML = "Guess History: " + guesses; 
}

//Shows user answer 
function cheat() {
    console.log(answer);
    document.getElementById("cheat").style.visibility="visible";
    document.getElementById("cheat").innerHTML = "Answer is: " + answer;
}

//Unhides every element hidden from win
function restart() {
    answer = Math.floor(Math.random() * 20);
    
    document.getElementById("userGuess").style.visibility="visible";
    document.getElementById("cheat").style.visibility="hidden";
    document.getElementById("restart").style.visibility="hidden";
    document.getElemenetByID("demo").style.visibility="hidden";
    document.getElementById("userGuess").style.visibility="visible";
    document.getElementById("check").style.visibility="visible";
    document.getElementById("guessList").style.visibility="hidden";
    document.getElementById("cheatBtn").style.visibility="visible";
}