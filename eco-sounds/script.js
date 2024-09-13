const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const main = document.querySelector('.main');
const btns = [
  {
    "name": "forest",
    "img": "./assets/img/forest.jpg",
    "audio": "./assets/audio/forest.mp3",
  },
  {
    "name": "solovey",
    "img": "./assets/img/solovey.jpg",
    "audio": "./assets/audio/solovey.mp3",
  },
  {
    "name": "drozd",
    "img": "./assets/img/drozd.jpg",
    "audio": "./assets/audio/drozd.mp3",
  },
  {
    "name": "javoronok",
    "img": "./assets/img/javoronok.jpg",
    "audio": "./assets/audio/javoronok.mp3",
  },
  {
    "name": "zarynka",
    "img": "./assets/img/zarynka.jpg",
    "audio": "./assets/audio/zarynka.mp3",
  },
  {
    "name": "slavka",
    "img": "./assets/img/slavka.jpg",
    "audio": "./assets/audio/slavka.mp3",
  },
]

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  play.classList.add('hidden');
  pause.classList.remove('hidden');
}

function pauseAudio() {
  audio.pause();
  play.classList.remove('hidden');
  pause.classList.add('hidden');
}

btns.forEach(btn => {

  const btnElement = document.querySelector(`.${btn.name}`);

  if (btnElement) {
    btnElement.addEventListener('click', () => {
      audio.src = btn.audio;
      main.style.backgroundImage = `url(${btn.img})`;
      playAudio();
    });
  }
});

play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);