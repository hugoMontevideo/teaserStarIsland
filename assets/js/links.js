
const discordeButton = document.querySelector("#discorde-button-img");
const reseaux = document.querySelectorAll(".reseaux");

const audioBtn = document.querySelector('#audioBtn');
const audioImg = document.querySelector('#audioImg');
const audio = new Audio("assets/audio/Roddy_Ricch.mp3");
console.log(audio);

// functions ************************

// play/pause de l'audio
function switchState () {
  if (audio.paused === true){
    audio.play();
    audioImg.src = "assets/pictures/icons8-son-no-son-48.png";
  } else {
    audio.pause();
    audioImg.src = "assets/pictures/icons8-son-48.png";
  }
}

// code  *****************************
window.addEventListener('click', event =>{

    let currentElement = event.target;
    if(currentElement.getAttribute('id') == 'discorde-button-img'){
        reseaux.forEach(element => element.classList.add('active'));
    }else{
        reseaux.forEach(element => element.classList.remove('active'));               
    }
});

audioBtn.addEventListener('click', switchState);