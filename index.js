let drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i <drumButtons.length; i++){ 
    drumButtons[i].addEventListener("click", function () {
        this.style.color = "white";
       
    })
}


// var audio = new Audio("tom-1.mp3");
// audio.play();