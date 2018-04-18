let entrySound = document.getElementById('sound__entry');

//Website loads, music starts, everything comes to places:

entrySound.play();

// after 4 sec cloud button wiggles, hover(more clouds come in) and click effects may happen:

// after 5 sec:

setTimeout(function(){
  entrySound.pause();
}, 5000);

// when button clicked, clouds stay, starts raining, plays raining sound:

//
