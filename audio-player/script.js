
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
const range = document.querySelector('.range');
const more = document.querySelector('.more');
const text = document.querySelector('.text');

const audios = [
    {
        "name": "mauntins",
        "img": "./assets/img/mauntins.jpg",
        "audio": "./assets/audio/mauntins.mp3",
        "autor": "BLIZKEY",
        "nameaudio": "Горы",
        "text": "У меня из окна видно вот такие горы<br>Если не понятно, наведи взгляд на мой город<br>У меня из окна видно вот такие горы<br>Братья ждут встречи, буду быстрее, чем на скорой<br><br>У меня из окна видно вот такие горы<br>Если не понятно, наведи взгляд на мой город<br>У меня из окна видно вот такие горы<br>Братья ждут встречи<br><br>У меня горячая голова<br>Глаз-алмаз, сердце изо льда<br>Лови мой панч прямо из-за стола<br>Карты, чача, два ствола<br>Половина горы, половина моря<br>Как будто Пикассо нарисовал<br>Я вообще далёк от суеверия<br>Но никаких дел без доверия<br><br>У меня из окна видно вот такие горы<br>Если не понятно, наведи взгляд на мой город<br>У меня из окна видно вот такие горы<br>Братья ждут встречи, буду быстрее, чем на скорой<br>Вот такие горы<br>Наведи взгляд на мой город<br>Горы<br>Братья ждут встречи, буду быстрее, чем на скорой",
    },
    {
        "name": "half",
        "img": "./assets/img/half.jpg",
        "audio": "./assets/audio/half.mp3",
        "autor": "Amura",
        "nameaudio": "Меня без тебя половина",
        "text": "Меня без тебя половина<br>А люди проносятся мимо<br>Увы, среди них не найти мне<br>Того, без кого половина<br><br>А так хотелось бросить курить, не спать, молчать<br>Пытаться снова полюбить, но не тебя<br>А так хотелось бросить курить, не спать, молчать<br>Пытаться снова полюбить, но не тебя<br><br>Стало так холодно<br>Звонки без повода<br>Не бывает любви<br>Без рубцов и обид<br>Мысли как провода<br>Снова в никуда<br>Засыпать без тебя<br>В пять утра и опять<br>В окно серый дым<br>Мысли о тебе за ним<br>Увы, но мы обречены<br>Помнить все, что натворили<br>Тяжело, ведь ты<br>Привычка номер один<br>И как мне тебя забыть -- Если<br><br> Припев",
    },
    {
        "name": "pay",
        "img": "./assets/img/pay.jpg",
        "audio": "./assets/audio/pay.mp3",
        "autor": "A.V.G",
        "nameaudio": "Я плачу",
        "text": "Ой, она топ во всех традициях<br>У, её цель — столица<br>Ха, она не верит в любовь, эй, тупица<br>Ой, дай денег — даст влюбиться, ой<br>Оу, вниз, плиз, я плачу, если хочет чупа-чупс<br>Нужны деньги — намучу, она сушит — намочу<br>Я как самый лучший блогер<br>Нужны траблы — накручу<br>Ой, и залетит — залечу<br>Ой, хочет днём, а я ночью<br>Она плачет — я плачу<br>Но если часто сует нос, я его укорочу<br>Нету денег — заплачу, нету денег — нету чувств<br>Есть она я заплачу<br>На радаре тебя мониторю, твой триггер — это парень в баре<br>Ищу предлог, чтобы найти тут корень<br>Бум, она хочет меня с перегаром, я будто бы с ней угораю<br>Чтобы игра была в ничью, выпей за встречу<br>Она не нуждается в твоих бабках<br>Ей неважно, сколько у тебя кэша<br>Но есть единственный факт: Деньги — показатель твоего веса<br>У, насколько ты интересен, будь проще, она хочет доверия<br>Без критической агрессии, геометрической прогрессии<br>Боюсь быть у неё не не было отца и она ищет наглеца<br>Дай ей тепло, любовь, камень, йоу, и она будет радоваться<br>Главное начать, есть деньги — оставь на чай<br>И не холодно, не горячо",
    },
    {
        "name": "wings",
        "img": "./assets/img/wings.jpg",
        "audio": "./assets/audio/wings.mp3",
        "autor": "Merab Amzoevi",
        "nameaudio": "",
        "text": "Были бы крылья, а небо найдется и кто-то научит летать<br>В Жизни ни раз еще перевернется, всё повторится опять<br>Были бы крылья, а небо найдется и кто-то научит летать<br>В Жизни ни раз еще перевернется, всё повторится опять<br>Там где нас нет<br>Любая тропа уведет<br>Из тени на свет<br>И каждому там повезёт<br>Лишь Там где нас нет<br>Взять бы туда билет<br>Улететь от проблем и бед<br>Всем во благо, а не во вред<br>Это сказка или бред<br>Крутится шар, за ударами - шрамы<br>Тут То холод, то жар, зато поёт моя душа<br>Припев<br>Жизнь кому то в радость, а кому то бремя<br>Тратятся деньги, Тратится время<br>Кто то уходит, покидая стремя<br>Но после где-то прорастает семя<br>И пока порох гремит, пламя горит и дымит повсеместно<br>Что то внутри говорит, болит, но благоволит<br>Еще не спета последняя песня<br>Крутится шар, за ударами - шрамы<br>Тут То холод, то жар, зато поёт моя душа<br>Припев",
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
    text.innerHTML = track.text;
    trackIndex = index;
}

function playAudio() {
    // audio.currentTime = 0;
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

function getText () {
    text.classList.toggle('hidden');
}

more.addEventListener('click', getText)
audio.addEventListener('ended', goForward)
audio.addEventListener('timeupdate', updadeProgress)
progressContainer.addEventListener('click', setProgress)
play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
backward.addEventListener('click', goBackward);
forward.addEventListener('click', goForward);


loadTrack(trackIndex);