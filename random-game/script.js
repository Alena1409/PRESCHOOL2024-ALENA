document.addEventListener("DOMContentLoaded", function () {

    const field = document.querySelector('.field');
    const ctx = field.getContext("2d");

    const background = new Image();
    background.src = './assets/img/field.png';

    const sound = new Image();
    sound.src = './assets/svg/volume-mute.svg'

    foods = [
        "./assets/img/blueberry.png",
        "./assets/img/cherry.png",
        "./assets/img/grapes.png",
        "./assets/img/strawberry.png",
    ]

    let foodIndex = 0; // Индекс текущей еды
    const food = new Image();
    food.src = foods[foodIndex]; // Загрузка первого изображения еды

    function updateFood() {
        foodIndex = (foodIndex + 1) % foods.length; // Увеличиваем индекс и сбрасываем его на 0, если он выходит за пределы
        food.src = foods[foodIndex]; // Обновляем источник изображения еды
    }

    const headSnakeUp = new Image();
    headSnakeUp.src = './assets/img/snake-head-up.png'; // Для вверх

    const headSnakeDown = new Image();
    headSnakeDown.src = './assets/img/snake-head.png'; // Для вниз

    const headSnakeLeft = new Image();
    headSnakeLeft.src = './assets/img/snake-head-l.png'; // Для влево

    const headSnakeRight = new Image();
    headSnakeRight.src = './assets/img/snake-head-r.png'; // Для вправо

    const tailSnake = new Image();
    tailSnake.src = './assets/img/snake-tail.png'

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

    let dir;

    function direction(event) {
        if (event.keyCode == 37 && dir !== 'right') {
            dir = 'left';
        } else if (event.keyCode == 38 && dir !== 'down') {
            dir = 'up';
        } else if (event.keyCode == 39 && dir !== 'left') {
            dir = 'right';
        } else if (event.keyCode == 40 && dir !== 'up') {
            dir = 'down';
        }
    }

    document.addEventListener('keydown', direction);

    function eatTail(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game);
            }
        }
    }


    function drawGame() {

        ctx.clearRect(0, 0, field.width, field.height); // Очистка канваса

        ctx.drawImage(background, 0, 0);
        ctx.drawImage(sound, box * 16, box * 17.8, box * 2, box * 2)
        ctx.drawImage(food, locationFood.x, locationFood.y);

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

        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText(score, box, box * 19.6);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (snakeX == locationFood.x && snakeY == locationFood.y) {
            score++;
            updateFood(); // Обновляем еду при поедании
            locationFood = {
                x: Math.floor(Math.random() * 17 + 1) * box,
                y: Math.floor(Math.random() * 16 + 1) * box,
            }
        } else {
            snake.pop();
        }

        if (snakeX < box || snakeX > box * 17 || snakeY < box || snakeY > box * 16) {
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
    }

    let game = setInterval(drawGame, 150);
});