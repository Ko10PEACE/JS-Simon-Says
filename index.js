//store colors in var [array]
var buttonColors = ["red", "blue", "green", "yellow"];
//store which button lit up/ in what order [array]
var gamePattern = [];
//empty array for storing user input
var userClickedPattern = [];

//wait to start until key is pressed
var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {
        $('#level-title').text("Level " + level);
        nextSequence();
        started = true;
    }
});

//listen for buttons pressed
$(".btn").click(function() {
    userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor); 
    //calls function to check answer once button is pressed
    checkAnswer(userClickedPattern.length-1);
});

//If correct, trigger array (random color) +1
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.lenth === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        //if player presses wrong array sequence trigger game over
        playSound("wrong");
        $("body").addClass("game-over").delay(200).removeClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $(document).keypress(function() {startOver()};);
    }
};

//main game function 
function nextSequence() {
    //clears user pattern from last round
    userClickedPattern = [];
    //adds to level when parent is called and changes h1 tag inner-html
    level++;
    $("#level-title").text("Level " + level);
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

//Changes looked of pressed button
function animatePress(currentColor){
    $('#' + currentColor).addClass("pressed").delay(100).removeClass("pressed");

}
//Plays Sound function
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//reset if another key is pressed after gameover sequence
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
};
