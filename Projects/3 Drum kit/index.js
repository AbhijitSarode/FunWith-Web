//Step1:- Select all drum elements from HTML page
var numberOfButtons = document.querySelectorAll('.drum').length;

//Step2A:- Add click eventListener on all drums
//Step2.2:- Play appropriate sound by passing drum value to the function
//Step2.1:- Play appropriate animation by passing drum value to the function 
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML //Gets the button value when clicked on it
        activateDrum(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
    });
}
//Step2B:- Add keypress eventListener on all drums, play sound & animation
document.addEventListener("keypress", function(event) {
    activateDrum(event.key)
    buttonAnimation(event.key)
})


//Step3:-Select audio, play audio using switch
function activateDrum(drum) {
    switch (drum) {
        case "w":
            var audio =  new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
    
        case "a":
            var audio =  new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        case "s":
            var audio =  new Audio("sounds/tom-3.mp3")
            audio.play()
            break;
        case "d":
            var audio =  new Audio("sounds/tom-4.mp3")
            audio.play()
            break;
        case "j":
            var audio =  new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "k":
            var audio =  new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        case "l":
            var audio =  new Audio("sounds/snare.mp3")
            audio.play()
            break;
        default:
            console.log(drum)
            break;
    }
}

//Step4.1:- Select clicked/tapped drum
//Step4.2:- Animate by adding a class and removing after a slpit second
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey) //Selects individual drum from the drumlist
    activeButton.classList.add("pressed") //Adds CSS class

    setTimeout(function(){
        activeButton.classList.remove("pressed") //After 0.1second removes CSS class to create animation
    }, 100)
}