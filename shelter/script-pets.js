document.addEventListener("DOMContentLoaded", function () {

    const SCROLL_LARGE = 930;
    const SCROLL_MEDIUM = 1395;
    const MAX_SCROLL_LARGE = 4650;
    const MAX_SCROLL_MEDIUM = 9765;
    const MAX_SCROLL_SMALL = 20925;

    const body = document.getElementById('body');
    const grey = document.getElementById('grey');
    const header = document.querySelector('.header-pets');


    const pop = document.querySelector('.pop');
    const cardsContainerRow = document.querySelector('.cards-container-row');

    const btnPrev = document.querySelector('.btn-paginator-prev');
    const btnNext = document.querySelector('.btn-paginator-next');
    const btnStart = document.querySelector('.btn-paginator-prev-start');
    const btnEnd = document.querySelector('.btn-paginator-next-end');
    const btn1 = document.querySelector('.btn-1');

    let w = window.innerWidth;
    let topUp = 0;
    let clicks = Number(btn1.innerHTML);


    const closeMenu = () => {
        header.classList.remove('open');
        grey.classList.remove('grey');
        body.classList.remove('stop-scroll');
    }

    const toggleMenu = () => {
        header.classList.toggle('open');
        grey.classList.toggle('grey');
        body.classList.toggle('stop-scroll');
    }

    // burger-menu
    document.getElementById('burger-dark').addEventListener('click', toggleMenu);
    grey.addEventListener('click', closeMenu);
    document.querySelectorAll('.nav-menu-link').forEach(item => { item.addEventListener('click', closeMenu) });


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

        card.append(imgCard);
        card.append(nameCard);
        card.append(btnCard);

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

        modalWrapper.append(btnModal);
        modalWrapper.append(imgModal);
        modalWrapper.append(modalConten);

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

        modalConten.append(modalHeading);
        modalConten.append(modalSubheading);
        modalConten.append(modalText);
        modalConten.append(modalList);

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

        modalList.append(age);
        modalList.append(inoculations);
        modalList.append(diseases);
        modalList.append(parasites);

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
    }

    for (let i = 0; i < 6; i++) {

        const arr = [];

        for (let i = 0; i < 8; i++) {

            const card = createCards(i);

            arr.push(card);
            arr.sort(() => Math.random() - 0.5);
            arr.forEach(pet => cardsContainerRow.append(pet));
        };
    };

    const funClick = () => {
        if (w > 768) {
            if (clicks === 6) {

                btnEnd.classList.add('btn-ring-inactive')
                btnEnd.classList.remove('btn-ring-normal')
                btnNext.classList.add('btn-ring-inactive')
                btnNext.classList.remove('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')

            } else if (clicks === 1) {

                btnStart.classList.add('btn-ring-inactive')
                btnStart.classList.remove('btn-ring-normal')
                btnPrev.classList.add('btn-ring-inactive')
                btnPrev.classList.remove('btn-ring-normal')

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

            } else if (clicks !== 6 && clicks !== 1) {

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')
            }
        } else if (w > 320) {
            if (clicks === 8) {

                btnEnd.classList.add('btn-ring-inactive')
                btnEnd.classList.remove('btn-ring-normal')
                btnNext.classList.add('btn-ring-inactive')
                btnNext.classList.remove('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')

            } else if (clicks === 1) {

                btnStart.classList.add('btn-ring-inactive')
                btnStart.classList.remove('btn-ring-normal')
                btnPrev.classList.add('btn-ring-inactive')
                btnPrev.classList.remove('btn-ring-normal')

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

            } else if (clicks !== 8 && clicks !== 1) {

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')
            }
        } else if (w > 220) {
            if (clicks === 16) {

                btnEnd.classList.add('btn-ring-inactive')
                btnEnd.classList.remove('btn-ring-normal')
                btnNext.classList.add('btn-ring-inactive')
                btnNext.classList.remove('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')

            } else if (clicks === 1) {

                btnStart.classList.add('btn-ring-inactive')
                btnStart.classList.remove('btn-ring-normal')
                btnPrev.classList.add('btn-ring-inactive')
                btnPrev.classList.remove('btn-ring-normal')

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

            } else if (clicks !== 16 && clicks !== 1) {

                btnEnd.classList.remove('btn-ring-inactive')
                btnEnd.classList.add('btn-ring-normal')
                btnNext.classList.remove('btn-ring-inactive')
                btnNext.classList.add('btn-ring-normal')

                btnStart.classList.remove('btn-ring-inactive')
                btnStart.classList.add('btn-ring-normal')
                btnPrev.classList.remove('btn-ring-inactive')
                btnPrev.classList.add('btn-ring-normal')
            }
        }
    }

    funClick();

    btnNext.addEventListener('click', function () {

        if (w > 768) {
            topUp = topUp + SCROLL_LARGE;

            if (topUp > MAX_SCROLL_LARGE) {
                topUp = MAX_SCROLL_LARGE;
            };
        } else if (w > 320) {
            topUp = topUp + SCROLL_MEDIUM;

            if (topUp > MAX_SCROLL_MEDIUM) {
                topUp = MAX_SCROLL_MEDIUM;
            };
        } else if (w > 220) {
            topUp = topUp + SCROLL_MEDIUM;

            if (topUp > MAX_SCROLL_SMALL) {
                topUp = MAX_SCROLL_SMALL;
            };
        };

        cardsContainerRow.style.top = -topUp + 'px';

        if (w > 768) {
            if (clicks < 6) {
                clicks += 1;
            } else {
                clicks = 6;
            }
        } else if (w > 320) {
            if (clicks < 8) {
                clicks += 1;
            } else {
                clicks = 8;
            }

        } else if (w > 220) {
            if (clicks < 16) {
                clicks += 1;
            } else {
                clicks = 16;
            }
        }

        btn1.innerHTML = clicks;
        funClick();

    })

    btnPrev.addEventListener('click', function () {

        if (w > 768) {
            topUp = topUp - SCROLL_LARGE;
            if (topUp < 0) {
                topUp = 0;
            };
        } else if (w > 320) {
            topUp = topUp - SCROLL_MEDIUM;
            if (topUp < 0) {
                topUp = 0;
            };
        }

        cardsContainerRow.style.top = -topUp + 'px';

        if (clicks > 1) {
            clicks -= 1;
        } else {
            clicks = 1;
        }

        btn1.innerHTML = clicks;
        funClick();
    })

    btnEnd.addEventListener('click', function () {

        if (w > 768) {
            topUp = topUp + MAX_SCROLL_LARGE;
            if (topUp > MAX_SCROLL_LARGE) {
                topUp = MAX_SCROLL_LARGE;
            };
        } else if (w > 320) {
            topUp = topUp + MAX_SCROLL_MEDIUM;
            if (topUp > MAX_SCROLL_MEDIUM) {
                topUp = MAX_SCROLL_MEDIUM;
            };
        } else if (w > 220) {
            topUp = topUp + MAX_SCROLL_SMALL;
            if (topUp > MAX_SCROLL_SMALL) {
                topUp = MAX_SCROLL_SMALL;
            };
        }

        cardsContainerRow.style.top = -topUp + 'px';

        if (w > 768) {
            clicks = 6;
        } else if (w > 320) {
            clicks = 8;
        } else if (w > 220) {
            clicks = 16;
        }

        btn1.innerHTML = clicks;
        funClick();
    })

    btnStart.addEventListener('click', function () {

        if (w > 768) {
            topUp = topUp - MAX_SCROLL_LARGE;
            if (topUp < 0) {
                topUp = 0;
            };
        } else if (w > 320) {
            topUp = topUp - MAX_SCROLL_MEDIUM;
            if (topUp < 0) {
                topUp = 0;
            };
        } else if (w > 220) {
            topUp = topUp - MAX_SCROLL_SMALL;
            if (topUp < 0) {
                topUp = 0;
            };
        }

        cardsContainerRow.style.top = -topUp + 'px';
        clicks = 1;
        btn1.innerHTML = clicks;
        funClick();
    })

    window.addEventListener('resize', function () {
        w = window.innerWidth;
    });
});

