document.addEventListener("DOMContentLoaded", function () {

    const field = document.querySelector('.field');
    const ctx = field.getContext("2d");

    const background = new Image();
    background.src = './assets/img/field.png';

    const resultImg = new Image();
    resultImg.src = './assets/img/apple-worm.png'

    foods = [
        "./assets/img/blueberry.png",
        "./assets/img/cherry.png",
        "./assets/img/grapes.png",
        "./assets/img/strawberry.png",
        "./assets/img/apple.png",
        "./assets/img/raspberry.png",
    ]

    let foodIndex = 0; // Индекс текущей еды
    const food = new Image();
    food.src = foods[foodIndex]; // Загрузка первого изображения еды

    function updateFood() {
        foodIndex = (foodIndex + 1) % foods.length; // Увеличиваем индекс и сбрасываем его на 0, если он выходит за пределы
        food.src = foods[foodIndex]; // Обновляем источник изображения еды
    }

    //голова в разные стороны
    const headSnakeUp = new Image();
    headSnakeUp.src = './assets/img/snake-head-up.png'; // вверх

    const headSnakeDown = new Image();
    headSnakeDown.src = './assets/img/snake-head.png'; // вниз

    const headSnakeLeft = new Image();
    headSnakeLeft.src = './assets/img/snake-head-l.png'; // влево

    const headSnakeRight = new Image();
    headSnakeRight.src = './assets/img/snake-head-r.png'; // вправо

    const tailSnake = new Image();
    tailSnake.src = './assets/img/snake-tail.png'

    const audio = new Audio();

    function playAudio(srcs) {
        audio.src = `./assets/audio/${srcs}`;
        audio.currentTime = 0;
        audio.play();
    }

    const box = 25;
    let score = 0;

    let locationFood = {
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 16 + 1) * box,
    }

    let snake = [];

    snake[0] = {
        x: 9 * box,
        y: 9 * box,
    }

    const resultsKey = 'snakeGameResults';
    let results = JSON.parse(localStorage.getItem(resultsKey)) || [];

    function saveResults() {
        if (results.length >= 10) {
            results.pop(); // Удаляем старый результат, если больше 10
        }
        results.unshift(score);
        localStorage.setItem(resultsKey, JSON.stringify(results));
        displayResults();
    }

    function displayResults() {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h3>Последние 10 результатов:</h3>';
        if (results.length === 0) {
            resultsDiv.innerHTML += '<p>Нет доступных результатов.</p>';
        } else {
            results.forEach((result, index) => {
                resultsDiv.innerHTML += `<p>${index + 1}: ${result}</p>`;
            });
        }
    }

    function drawResult() {
        ctx.fillStyle = '#66a07a';
        ctx.fillRect(box * 4, box * 6, box * 11, box * 6);
        ctx.strokeStyle = 'gray'
        ctx.lineWidth = 3;
        ctx.strokeRect(box * 4, box * 6, box * 11, box * 6);

        ctx.fillStyle = 'black';
        ctx.font = '35px Arial';
        ctx.fillText(`Игра окончена!`, box * 4.5, box * 8.5);
        ctx.fillText(`Вы набрали: ${score}`, box * 4.5, box * 10.5);
    }

    function drawInfo() {
        ctx.fillStyle = 'wait';
        ctx.font = '16px Arial';
        ctx.fillText(`Управление: w, a, s, d или ↑ ↓ → ←`, box, box * 18.5);
        ctx.fillText(`Перезапуск: enter или пробел `, box, box * 19.5);
    }

    function newGame() {
        score = 0;
        clearInterval(game);
        // Сброс змейки
        snake = [];
        snake[0] = {
            x: 9 * box,
            y: 9 * box,
        };
        // Обновление позиции еды
        locationFood = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 16 + 1) * box,
        };

        // Запуск новой игры
        game = setInterval(drawGame, 100);

    }

    let dir;

    function direction(event) {
        if ((event.keyCode == 37 || event.keyCode == 65) && dir !== 'right') {
            dir = 'left';
        } else if ((event.keyCode == 38 || event.keyCode == 87) && dir !== 'down') {
            dir = 'up';
        } else if ((event.keyCode == 39 || event.keyCode == 68) && dir !== 'left') {
            dir = 'right';
        } else if ((event.keyCode == 40 || event.keyCode == 83) && dir !== 'up') {
            dir = 'down';
        } else if (event.keyCode == 32 || event.keyCode == 13) {
            newGame();
        }
    }

    document.addEventListener('keydown', direction);

    //проиграл
    function eatTail(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                saveResults();
                playAudio('konets-igryi.mp3');
                drawResult();
                clearInterval(game);
            }
        }
    }

    function drawGame() {

        ctx.clearRect(0, 0, field.width, field.height); // очистка канваса

        ctx.drawImage(background, 0, 0);
        ctx.drawImage(food, locationFood.x, locationFood.y);
        ctx.drawImage(resultImg, box * 12.3, box * 17.4)
        drawInfo();

        //голова змейки
        let headSnake;

        if (dir === 'up') {
            headSnake = headSnakeUp;
        } else if (dir === 'down') {
            headSnake = headSnakeDown;
        } else if (dir === 'left') {
            headSnake = headSnakeLeft;
        } else if (dir === 'right') {
            headSnake = headSnakeRight;
        } else {
            headSnake = headSnakeDown;
        }

        ctx.drawImage(headSnake, snake[0].x, snake[0].y, box, box);

        //тело змейки
        for (let i = 1; i < snake.length; i++) {
            ctx.drawImage(tailSnake, snake[i].x, snake[i].y, box, box);
        }

        //счет рисуем
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText(score, box * 15.5, box * 19.6);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (snakeX == locationFood.x && snakeY == locationFood.y) {
            score++;
            playAudio('ukus.mp3');
            updateFood(); // Обновляем еду при поедании
            locationFood = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 16 + 1) * box,
            }
        } else {
            snake.pop();
        };

        //проиграл
        if (snakeX < box || snakeX > box * 17 || snakeY < box || snakeY > box * 16) {
            saveResults();
            playAudio('konets-igryi.mp3');
            drawResult();
            clearInterval(game);
        }

        if (dir == 'left') {
            snakeX -= box
        } else if (dir == 'right') {
            snakeX += box
        } else if (dir == 'up') {
            snakeY -= box
        } else if (dir == 'down') {
            snakeY += box
        };

        let newHead = {
            x: snakeX,
            y: snakeY,
        };

        eatTail(newHead, snake);
        snake.unshift(newHead);
    };

    displayResults();

    let game = setInterval(drawGame, 100);
});