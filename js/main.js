
//Website loads, music starts, everything comes to places:

var audio;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "sounds/havana.mp3";
    audio.play();
}
window.addEventListener("load", initAudioPlayer);


// after 4 sec cloud button wiggles, hover(more clouds come in) and click effects may happen:

// after 5 sec:

setTimeout(function(){
  entrySound.pause();
}, 5000);

// when button clicked, clouds stay, starts raining, plays raining sound:

//
