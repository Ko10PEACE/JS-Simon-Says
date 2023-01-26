//wait to start until key is pressed


//store colors in var [array]
var buttonColors = ["red", "blue", "green", "yellow"];
//store which button lit up/ in what order [array]
var gamePattern = [];
//empty array for storing user input
var userClickedPattern = [];

//main game function 
function nextSequence() {
    //randomize which button lights up
    var randomNumber = Math.floor(Math.random()*4);
    //gets color from array and assigns to variable
    var randomChosenColor = buttonColours[randomNumber];
    // adds the color to the game pattern
    gamePattern.push(randomChosenColor);
    // flashes the chosen color by selecting the ID
    $("#" + "randomChosenColor").fadeIn(100).fadeOut(100).fadeIn(100);
    //plays audio of color chosen by function
    playSound(randomChosenColor);
}
//listen for buttons pressed
$(".btn").click(function() {
    userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    //testing purp
    //console.log(userClickedPattern);
});
//Plays Sound function
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//CChanges looked of pressed button
function animatePress(currentColor){
    $(this).attr("class").add("pressed").delay(100).remove();
}

//If correct, trigger array (random color) +1

//if player presses wrong array sequence trigger game over

//reset if another key is pressed after gameover sequence
