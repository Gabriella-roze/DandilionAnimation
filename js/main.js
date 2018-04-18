let btns = document.getElementById('buttons');
let btnRain = document.getElementById('btn__rain');
let soundRain = document.getElementById('soundRain');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');


//Website loads, music starts, everything comes to places:
var audio;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "sounds/havana.mp3";
    audio.play();
}

window.addEventListener("load", initAudioPlayer);

// after 7s:

setTimeout(function(){
  audio.pause();
}, 6900);

// when RAIN clicked, clouds, starts raining, plays raining sound:

btnRain.addEventListener('click', function(){
  soundRain.play();
  cloud1.classList.add("anim-shake");
  cloud2.classList.add("anim-shake");
  cloud3.classList.add("anim-shake");
  stopSound();
  stopAnim();
  on();
});
function stopSound(){
  setTimeout(function(){
    soundRain.pause();
    off();
  }, 4000);
}
function stopAnim(){
  setTimeout(function(){
    cloud1.classList.remove("anim-shake");
    cloud2.classList.remove("anim-shake");
    cloud3.classList.remove("anim-shake");
  }, 4000)
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

//
