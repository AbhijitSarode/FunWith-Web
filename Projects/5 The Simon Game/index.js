var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false

$('button').click(function(){
    var userChosenColor = $(this).attr("class")
    userClickedPattern.push(userChosenColor)

    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})

$(document).keypress(function(){

    if (!started) {
        var heading = $(this).text()
        updateHeading(0)
        nextSequence()
        started = true
    }
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour)

    animatePress(randomChosenColour)
    playSound(randomChosenColour)

    level++
    userClickedPattern = []
    updateHeading(level)
}

function playSound(sound) {
    var audio = new Audio(`sounds/${sound}.mp3`)
    audio.play()
}

function animatePress(btnTapped) {
    // $("." + btnTapped).fadeIn(100).fadeOut(100).fadeIn(100)
    $("." + btnTapped).addClass('pressed')

    setTimeout(function(){
        $("." + btnTapped).removeClass('pressed')
    }, 100)
}

function updateHeading(levelNumber) {
    $('h1').text("level " + levelNumber)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log('success')
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    } else {
        console.log('failed')
        playSound("wrong")
        $('body').addClass('game-over')
        setInterval(function(){
            $('body').removeClass("game-over")
        }, 200);
        $('h1').text("Game over, Press 'A' to start")
        startOver()
    }
}

function startOver() {
    started = false
    level = 0
    gamePattern.length = 0
    userClickedPattern = []
}