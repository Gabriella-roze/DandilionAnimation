let btns = document.getElementById('buttons');
let btnStart = document.getElementById('btn__start');
let btnRain = document.getElementById('btn__rain');
let btnSun = document.getElementById('btn__sun');
let btnAlt = document.getElementById('btn__alt');
let soundRain = document.getElementById('soundRain');
let soundEntry = document.getElementById('sound__entry');
let soundSun = document.getElementById('soundSun');
let flower = document.getElementById('flower');
let sun = document.getElementById('sun');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');

// GENERAL
btnStart.style.display = 'initial';

displayButtons();

function displayButtons(){
  if (btnStart.style.display == 'initial'){
    btnRain.style.display = 'none';
    btnSun.style.display = 'none';
    btnAlt.style.display = 'none';
  }
  else if (btnRain.style.display == 'initial'){
    btnStart.style.display = 'none';
    btnSun.style.display = 'none';
    btnAlt.style.display = 'none';
  }
  else if (btnSun.style.display == 'initial'){
    btnStart.style.display = 'none';
    btnRain.style.display = 'none';
    btnAlt.style.display = 'none';
  }
  else {
    btnStart.style.display = 'none';
    btnRain.style.display = 'none';
    btnSun.style.display = 'none';
  }
}


//Website loads, music starts, everything comes to places:

btnStart.addEventListener('click', function(){
  soundEntry.play();
  btnStart.style.display = 'none';
  btnRain.style.display = 'initial';
  displayButtons();
})

// when RAIN clicked, clouds, starts raining, plays raining sound:

btnRain.addEventListener('click', function(){
  soundEntry.volume = .3;
  soundRain.play();
  cloud1.classList.add("anim-shake");
  cloud2.classList.add("anim-shake");
  cloud3.classList.add("anim-shake");
  btnRain.style.display = 'none';
  btnSun.style.display = 'initial';
  btnRain.style.display = 'none';

  stopSound();
  stopAnim();
  on();
  displayButtons();
});
function stopEntrySound(){
    soundEntry.pause();
  };
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

// SUN SHINE button clicked:

btnSun.addEventListener('click', function(){
  soundSun.play();
  onYellow();
  sun.classList.add('anim-shine')
  btnSun.style.display = 'none';
  btnAlt.style.display = 'initial';
  flower.src='images/flower3.png';
  btnSun.style.display = 'none';
  stopYellow();
});
function stopYellow() {
  setTimeout(function(){
    offYellow();
    sun.classList.remove('anim-shine');
  }, 2000)
}
function onYellow() {
    document.getElementById("overlay--yellow").style.display = "block";
};

function offYellow() {
    document.getElementById("overlay--yellow").style.display = "none";
};
