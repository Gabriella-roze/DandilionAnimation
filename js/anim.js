let soundFinal = document.getElementById('soundFinal');
let btnChoice = document.getElementById('btn__choice');
let pickingAnim = document.getElementById('picking__anim');

setTimeout(function(){
  console.log('pickingAnim.style: ', pickingAnim.style);
  pickingAnim.style.backgroundImage = 'none';
  btnChoice.style.display = 'initial';
}, 2000)
