
const body = document.querySelector('body');
const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const backward = document.querySelector('.backward');
const forward = document.querySelector('.forward');
const imgPlayer = document.querySelector('.imgPlayer');
const autor = document.querySelector('.autor');
const nameaudio = document.querySelector('.nameaudio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const totalTime = document.querySelector('.total-time');
const newTime = document.querySelector('.current-time');
const range = document.querySelector('.range')

const audios = [
    {
        "name": "mauntins",
        "img": "./assets/img/mauntins.jpg",
        "audio": "./assets/audio/mauntins.mp3",
        "autor": "BLIZKEY",
        "nameaudio": "Горы",
    },
    {
        "name": "half",
        "img": "./assets/img/half.jpg",
        "audio": "./assets/audio/half.mp3",
        "autor": "Amura",
        "nameaudio": "Меня без тебя половина",
    },
    {
        "name": "pay",
        "img": "./assets/img/pay.jpg",
        "audio": "./assets/audio/pay.mp3",
        "autor": "A.V.G",
        "nameaudio": "Я плачу",
    },
    {
        "name": "wings",
        "img": "./assets/img/wings.jpg",
        "audio": "./assets/audio/wings.mp3",
        "autor": "Merab Amzoevi",
        "nameaudio": "Были бы крылья",
    },
]

let trackIndex = 0;

function loadTrack(index) {
    const track = audios[index];
    audio.src = track.audio;
    body.style.backgroundImage = `url(${track.img})`;
    imgPlayer.style.backgroundImage = `url(${track.img})`;
    autor.innerHTML = track.autor;
    nameaudio.innerHTML = track.nameaudio;
    trackIndex = index;
}

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

function goBackward() {
    let newIndex = trackIndex - 1;
    if (newIndex < 0) newIndex = audios.length - 1;
    loadTrack(newIndex);
    playAudio();
}

function goForward() {
    let newIndex = trackIndex + 1;
    if (newIndex >= audios.length) newIndex = 0;
    loadTrack(newIndex);
    playAudio();
}

function updadeProgress (e) {
    // const {duration, currentTime} = e.srcElement;
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressPersent = (currentTime / duration) * 100;
    progress.style.width = `${progressPersent}%`;

    newTime.textContent = formatTime(currentTime);
    totalTime.textContent = formatTime(duration);
}

function setProgress (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

range.oninput = function() {
    // Преобразование значения ползунка в диапазон от 0 до 1
    let normalizedValue = (this.value - this.min) / (this.max - this.min);
    audio.volume = normalizedValue;
}


audio.addEventListener('ended', goForward)
audio.addEventListener('timeupdate', updadeProgress)
progressContainer.addEventListener('click', setProgress)
play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
backward.addEventListener('click', goBackward);
forward.addEventListener('click', goForward);


loadTrack(trackIndex);