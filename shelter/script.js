document.addEventListener("DOMContentLoaded", function () {

    let w = window.innerWidth;

    const body = document.getElementById('body');
    const grey = document.getElementById('grey');
    const header = document.querySelector('header');

    const closeMenu = () => {
        header.classList.remove('open');
        grey.classList.remove('grey');
        body.classList.remove('stop-scroll');
    };

    const toggleMenu = () => {
        header.classList.toggle('open');
        grey.classList.toggle('grey');
        body.classList.toggle('stop-scroll');
    };

    // burger-menu
    document.getElementById('burger').addEventListener('click', toggleMenu);
    grey.addEventListener('click', closeMenu);
    document.querySelectorAll('.nav-menu-link').forEach(item => item.addEventListener('click', closeMenu));

    //данные по питомцам
    const pets = [
        {
            "name": "Jennifer",
            "img": "./assets/img/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Sophia",
            "img": "./assets/img/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Woody",
            "img": "./assets/img/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "name": "Scarlett",
            "img": "./assets/img/pets-scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Katrine",
            "img": "./assets/img/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Timmy",
            "img": "./assets/img/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "name": "Freddie",
            "img": "./assets/img/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Charly",
            "img": "./assets/img/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
    ];

    const cardsLeft = document.querySelector('.cards-left');
    const cardsActive = document.querySelector('.cards-active');
    const cardsRight = document.querySelector('.cards-right');
    const pop = document.querySelector('.pop');

    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const slider = document.querySelector('.slider');

    const namePets = pets.map(pet => pet.name);
    const imgPets = pets.map(pet => pet.img);
    const typePets = pets.map(pet => pet.type);
    const breedPets = pets.map(pet => pet.breed);
    const descriptionPets = pets.map(pet => pet.description);
    const agePets = pets.map(pet => pet.age);
    const inoculationsPets = pets.map(pet => pet.inoculations);
    const diseasesPets = pets.map(pet => pet.diseases);
    const parasitesPets = pets.map(pet => pet.parasites);


    const createCards = (i) => {

        const card = document.createElement('div');
        card.classList.add('friends-card');

        const imgCard = document.createElement('img');
        imgCard.classList.add('img-card');
        imgCard.src = imgPets[i];

        const nameCard = document.createElement('p');
        nameCard.classList.add('friends-card-paragraf');
        nameCard.innerHTML = namePets[i];

        const btnCard = document.createElement('button');
        btnCard.classList.add('btn-secondary');
        btnCard.innerText = 'Learn more';

        card.append(imgCard, nameCard, btnCard);

        //модалка

        const modal = document.createElement('div');
        modal.classList.add('modal', 'display-none');
        pop.append(modal);

        const modalWrapper = document.createElement('div');
        modalWrapper.classList.add('modal-wrapper')
        modal.append(modalWrapper);

        const btnModal = document.createElement('div');
        btnModal.classList.add('btn-ring', 'btn-ring-normal', 'btn-modal');
        btnModal.innerHTML = `&times;`;

        const imgModal = document.createElement('img');
        imgModal.classList.add('modal-img');
        imgModal.src = imgPets[i];

        const modalConten = document.createElement('div');
        modalConten.classList.add('modal-conten');

        modalWrapper.append(btnModal, imgModal, modalConten);

        const modalHeading = document.createElement('h3');
        modalHeading.classList.add('modal-heading');
        modalHeading.innerHTML = namePets[i];

        const modalSubheading = document.createElement('h4');
        modalSubheading.classList.add('modal-subheading');
        modalSubheading.innerHTML = `${typePets[i]} - ${breedPets[i]}`;

        const modalText = document.createElement('p');
        modalText.classList.add('modal-text');
        modalText.innerHTML = descriptionPets[i];

        const modalList = document.createElement('ul');
        modalList.classList.add('modal-list');

        modalConten.append(modalHeading, modalSubheading, modalText, modalList);

        const age = document.createElement('li');
        age.classList.add('modal-item');
        age.innerHTML = `<span>Age: </span>${agePets[i]}`;

        const inoculations = document.createElement('li');
        inoculations.classList.add('modal-item');
        inoculations.innerHTML = `<span>inoculations: </span>${inoculationsPets[i]}`;

        const diseases = document.createElement('li');
        diseases.classList.add('modal-item');
        diseases.innerHTML = `<span>Diseases: </span>${diseasesPets[i]}`;

        const parasites = document.createElement('li');
        parasites.classList.add('modal-item');
        parasites.innerHTML = `<span>Parasites: </span>${parasitesPets[i]}`;

        modalList.append(age, inoculations, diseases, parasites);

        card.addEventListener('click', () => {
            modal.classList.remove('display-none');
            document.getElementById('body').classList.add('stop-scroll');
        })

        btnModal.addEventListener('click', () => {
            modal.classList.add('display-none');
            document.getElementById('body').classList.remove('stop-scroll');
        })

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('display-none');
                document.getElementById('body').classList.remove('stop-scroll');
            }
        })
        return card;
    };

    const arr1 = [createCards(0), createCards(1), createCards(2)];
    const arr2 = [createCards(3), createCards(4), createCards(5)];
    const arr3 = [createCards(6), createCards(7), createCards(0)];

    const arr4 = [createCards(5), createCards(6), createCards(7)];
    const arr5 = [createCards(3), createCards(1), createCards(2)];

    const arr6 = [createCards(0), createCards(1), createCards(2)];
    const arr7 = [createCards(6), createCards(7), createCards(4)];

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    shuffle(arr1);
    shuffle(arr2);
    shuffle(arr3);

    const processCards = (array, container) => {
        let w = window.innerWidth;
    
        let visibleCount = 1; 
        if (w > 1200) {
            visibleCount = 3;
        } else if (w > 768) {
            visibleCount = 2;
        }

        container.innerHTML = "";
    
        array.forEach((element, index) => {
            if (index < visibleCount) {
                element.classList.remove('hidenn');
            } else {
                element.classList.add('hidenn');
            }
            container.append(element);
        });
    };

    processCards(arr1, cardsLeft);
    processCards(arr2, cardsActive);
    processCards(arr3, cardsRight);

    countL = 0;
    countR = 0;

    const transitionLeft = () => {
        slider.classList.add('transition-left');
        btnLeft.removeEventListener('click', transitionLeft);
        btnRight.removeEventListener('click', transitionRight);
        shuffle(arr4);
        shuffle(arr6);
        countL++;
    }
    const transitionRight = () => {
        slider.classList.add('transition-right');
        btnRight.removeEventListener('click', transitionRight);
        btnLeft.removeEventListener('click', transitionLeft);
        shuffle(arr5);
        shuffle(arr7);
        countR++;
    }

    btnLeft.addEventListener('click', transitionLeft);
    btnRight.addEventListener('click', transitionRight);

    slider.addEventListener("animationend", (event) => {

        if (event.animationName === "move-left") {

            slider.classList.remove('transition-left');

            cardsActive.innerHTML = cardsLeft.innerHTML;
            cardsLeft.innerHTML = " ";

            if (countL % 2) {
                processCards(arr4, cardsLeft);
            } else {
                processCards(arr6, cardsLeft);
            };
        } else {

            slider.classList.remove('transition-right');

            cardsActive.innerHTML = cardsRight.innerHTML;
            cardsRight.innerHTML = "";

            if (countR % 2) {
                processCards(arr5, cardsRight);
            } else {
                processCards(arr7, cardsRight);
            };

        };
        btnLeft.addEventListener('click', transitionLeft);
        btnRight.addEventListener('click', transitionRight);
    });

window.addEventListener('resize', () => {
    processCards(arr1, cardsLeft);
    processCards(arr2, cardsActive);
    processCards(arr3, cardsRight);
    processCards(arr4, cardsLeft);
    processCards(arr6, cardsLeft);
    processCards(arr5, cardsRight);
    processCards(arr7, cardsRight);

});
});