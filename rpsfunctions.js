//  ===============GLOBAL VARIABLES===============

var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;
var gameType;

//  ================MAIN FUNCTIONS================

function openScores() {
//  Shows the scores and games played for the current session.
//  Pre-conditions: None.
//  Post-conditions: Shows the scores and the number of games played.

    document.getElementsByClassName("bcolumn1").innerHTML = "<p>"+gamesPlayed+"<br>"+gamesWon+"<br>"+gamesLost+"</p>"

}
    
function openRules() {
//  Shows the rules of the game.
//  Pre-Conditions: None.
//  Post-Coniditions: Shows the rules for rock paper scissors.

    document.getElementsByClassName("bcolumn3").innerHTML = "<p>ROCK beats PAPER <br> SCISSORS beats PAPER <br> PAPER beats ROCK <br> SAME SYMBOL RESULTS IN A TIE</p>"

}

function innitNewGame() {
//  Initalizes the scores for a new game and makes the game visible.
//  Pre-Conditions: None.
//  Post-Conditions: Creats a new session of rock paper scissors.

    //  Set the Scores for a new round of games.
    gamesPlayed = 1; 
    gamesWon = 0;
    gamesLost = 0;

    //  Disables player vs choice so it can't be changed in the middle of a session. 
    document.getElementById("gameType").setAttribute("disabled","true");

    //  We should probably keep all the elements which are seen when the game is played hidden until this function is run.

}

function selectGameType(vsType) {
//  Sets the game type based on the users choice.
//  Pre-Conditions: A valid choice from the user.
//  Post-Consitions: Sets the game type for the session.

    gameType = vsType;

}

//  =============SUPPORTING FUNCTIONS=============

function runGame(user1Choice, user2Choice) {
//  Runs a game of rock paper scissors against the server.
//  Pre-Conditions: A valid move choice of rock paper or scissors.
//  Post-Conditions: Runs a game of rock paper scissors.

    //  Updates the scores based on if player 1 won the round.
    if (winner(user1Choice, user2Choice) == "won") {
        gamesWon ++;
    }
    else if (winner(user1Choice, user2Choice) == "lost") {
        gamesLost ++;
    }

    // Tracks that another round was played this session.
    gamesPlayed ++;

    //  Checks if the user wants to continue playing.
    var continuePlaying //= setup a modal pop-up to get user choice
    return continuePlaying;

}
    
function winner(choice1, choice2) {
//  Determines the winner of a game of rock paper scissors.
//  Pre-Conditions: A valid move choice of rock paper or scissors.
//  Post-Conditions: Returns the outcome of a match of rock paper scissors.

    //  Checks for a tie.
    if (choice1 == choice2) {
        return "tie";
    }
    //  Checks if any of player 1's choices won.
    else if (choice1 == "rock" && choice2 == "scissors") {
        return "won";
    }
    else if (choice1 == "scissors" && choice2 == "paper") {
        return "won";
    }
    else if (choice1 == "paper" && choice2 == "rock") {
        return "won";
    }
    //  Returns a loss for player 1 if none of their choices won.
    else {
        return "lost";
    }

}

function serverChoice() {
//  Has the server make a random choice pf rock paper or scissors.
//  Pre-Conditions: None.
//  Post-Conditions: Returns a random choice of rock paper or scissors.

    //  List of all the options for the game.
    var options = ["rock", "paper", "scissors"];
    //  Generates a random number from 0 to 2.
    var choice = Math.floor(Math.random()*3);

    //  Returns a random selection from options.
    return options[choice];

}

