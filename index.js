
// detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {



// inside the document, we look through the document and try to grab all 
//of the elemets that have class drum; gets all of this buttons
//next we loop through all of those el equal to 0 and add eventlistnes
// next time when we get to the next element, we will give another
//sound code will go through all of the elements

document.querySelectorAll(".drum") [i].addEventListener("click", function (){
    
   this.style.color = "white";
   var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);

   
    
 });

}

// detecting Keyboard Press



document.addEventListener("keypress", function(event) {
     makeSound(event.key);
     buttonAnimation(event.key);

});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
    
        case 'j':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
    
        case 'k':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
    
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
       }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
