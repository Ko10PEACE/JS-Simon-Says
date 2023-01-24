//index.js
//wait to start until key is pressed
var gamePattern = [];


//store which button lit up/ in what order [array]
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour)
//randomize which button lights up
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
} 
//
$("button").fadeOut(100).fadeIn(100);

//listen for buttons pressed

//If correct, trigger array (random color) +1

//if player presses wrong array sequence trigger game over


//reset if another key is pressed after gameover sequence
