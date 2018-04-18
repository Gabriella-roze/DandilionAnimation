let btns = document.getElementById('buttons');
let btnRain = document.getElementById('btn__rain');
let btnSun = document.getElementById('btn__sun');
let soundRain = document.getElementById('soundRain');
let soundEntry = document.getElementById('sound__entry');
let soundSun = document.getElementById('soundSun');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');



//Website loads, music starts, everything comes to places:

window.addEventListener("load", function(){
  console.log("play")
  soundEntry.play();
});

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
};
function stopAnim(){
  setTimeout(function(){
    cloud1.classList.remove("anim-shake");
    cloud2.classList.remove("anim-shake");
    cloud3.classList.remove("anim-shake");
  }, 3800)
};
function on() {
    document.getElementById("overlay").style.display = "block";
};

function off() {
    document.getElementById("overlay").style.display = "none";
};

// Sun shine button clicked:

btnSun.addEventListener('click', function(){
  console.log("soundSun");
  soundSun.play();
  stopSound();
  on();
});
