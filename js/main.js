let btns = document.getElementById('buttons');
let btnRain = document.getElementById('btn__rain');
let btnSun = document.getElementById('btn__sun');
let soundRain = document.getElementById('soundRain');
let soundEntry = document.getElementById('sound__entry');
let soundSun = document.getElementById('soundSun');
let flower = document.getElementById('flower');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');



//Website loads, music starts, everything comes to places:

window.addEventListener("load", function(){
  console.log("play");
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
  btnRain.style.display = 'none';
  stopSound();
  stopAnim();
  on();
});
function stopSound(){
  setTimeout(function(){
    soundRain.pause();
    flower.src='images/flower2.png';
    off();
  }, 3500);
};
function stopAnim(){
  setTimeout(function(){
    cloud1.classList.remove("anim-shake");
    cloud2.classList.remove("anim-shake");
    cloud3.classList.remove("anim-shake");
    ;
  }, 3200)
};
function on() {
    document.getElementById("overlay").style.display = "block";
};

function off() {
    document.getElementById("overlay").style.display = "none";
};

// Sun shine button clicked:

btnSun.addEventListener('click', function(){
  soundSun.play();
  onYellow();
  flower.src='images/flower3.png';
  btnSun.style.display = 'none';
  stopYellow();
});
function stopYellow() {
  setTimeout(function(){
    offYellow();
  }, 2000)
}
function onYellow() {
    document.getElementById("overlay--yellow").style.display = "block";
};

function offYellow() {
    document.getElementById("overlay--yellow").style.display = "none";
};
