document.addEventListener("DOMContentLoaded", function () {

    // burger-menu

    document.getElementById('burger-dark').addEventListener('click', function () {
        document.querySelector('.header-pets').classList.toggle('open');
        document.getElementById('grey').classList.toggle('grey');
        document.getElementById('body').classList.toggle('stop-scroll');

        document.getElementById('grey').addEventListener('click', function () {
            document.querySelector('header').classList.remove('open');
            document.getElementById('grey').classList.remove('grey');
            document.getElementById('body').classList.remove('stop-scroll');
        });

        document.querySelectorAll('.nav-menu-link').forEach(function (item) {
            item.addEventListener('click', function () {
                document.querySelector('header').classList.remove('open');
                document.getElementById('grey').classList.remove('grey');
                document.getElementById('body').classList.remove('stop-scroll');
            });
        });
    });

    //данные по питомцам
    const pets = [
        {
            "name": "Jennifer0",
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
            "name": "Sophia1",
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
            "name": "Woody2",
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
            "name": "Scarlett3",
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
            "name": "Katrine4",
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
            "name": "Timmy5",
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
            "name": "Freddie6",
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
            "name": "Charly7",
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
    const cardsContainerRow = document.querySelector('.cards-container-row')

    const namePets = pets.map(pet => {
        return pet.name
    });
    const imgPets = pets.map(pet => {
        return pet.img
    });
    const typePets = pets.map(pet => {
        return pet.type
    });
    const breedPets = pets.map(pet => {
        return pet.breed
    });
    const descriptionPets = pets.map(pet => {
        return pet.description
    });
    const agePets = pets.map(pet => {
        return pet.age
    });
    const inoculationsPets = pets.map(pet => {
        return pet.inoculations
    });
    const diseasesPets = pets.map(pet => {
        return pet.diseases
    });
    const parasitesPets = pets.map(pet => {
        return pet.parasites
    });

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

    

    const a = () => {
        

        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            cardsContainerRow.append(card);
        }

        const arr1 = [];
        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            arr1.push(card);
            arr1.sort(() => Math.random() - 0.5)
            arr1.forEach(pet => cardsContainerRow.append(pet))
        }
        const arr2 = [];
        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            arr2.push(card);
            arr2.sort(() => Math.random() - 0.5)
            arr2.forEach(pet => cardsContainerRow.append(pet))
        }
        const arr3 = [];
        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            arr3.push(card);
            arr3.sort(() => Math.random() - 0.5)
            arr3.forEach(pet => cardsContainerRow.append(pet))
        }
        const arr4 = [];
        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            arr4.push(card);
            arr4.sort(() => Math.random() - 0.5)
            arr4.forEach(pet => cardsContainerRow.append(pet))
        }
        const arr5 = [];
        for (let i = 0; i < 8; i++) {
            const card = createCards(i);
            arr5.push(card);
            arr5.sort(() => Math.random() - 0.5)
            arr5.forEach(pet => cardsContainerRow.append(pet))
        }
    }

    a();

    const btnPrev = document.querySelector('.btn-paginator-prev')
    const btnNext = document.querySelector('.btn-paginator-next')
    const btnStart = document.querySelector('.btn-paginator-prev-start')
    const btnEnd = document.querySelector('.btn-paginator-next-end')
    const btn1 = document.querySelector('.btn-1')

    let topUp = 0;
    let clicks = Number(btn1.innerHTML);

    const endInvactive = () => {
        btnEnd.classList.add('btn-ring-inactive')
        btnNext.classList.add('btn-ring-inactive')
        btnEnd.classList.remove('btn-ring-normal')
        btnNext.classList.remove('btn-ring-normal')


        btnPrev.classList.remove('btn-ring-inactive')
        btnStart.classList.remove('btn-ring-inactive')
        btnPrev.classList.remove('btn-ring-normal')
        btnStart.classList.remove('btn-ring-normal') 
    }

    const startInvactive = () => {
        btnStart.classList.add('btn-ring-inactive')
        btnPrev.classList.add('btn-ring-inactive')
        btnStart.classList.remove('btn-ring-normal') 
        btnPrev.classList.remove('btn-ring-normal')

        btnEnd.classList.remove('btn-ring-inactive')
        btnNext.classList.remove('btn-ring-inactive')
        btnEnd.classList.add('btn-ring-normal')
        btnNext.classList.add('btn-ring-normal')
    }


    btnNext.addEventListener('click', function () {

        topUp = topUp + 930;

        if (topUp > 4650) {
            topUp = 4650;
        };

        cardsContainerRow.style.top = -topUp + 'px';

        if (clicks < 6) {
            clicks += 1;
        } else {
            clicks = 6;
        }

        btn1.innerHTML = clicks;

        switch(clicks) {
            case 2: 
            btnStart.classList.remove('btn-ring-inactive')
            btnStart.classList.add('btn-ring-normal')
            btnPrev.classList.remove('btn-ring-inactive')
            btnPrev.classList.add('btn-ring-normal')
            break;

            case 6:
            btnEnd.classList.add('btn-ring-inactive')
            btnEnd.classList.remove('btn-ring-normal')
            btnNext.classList.add('btn-ring-inactive')
            btnNext.classList.remove('btn-ring-normal')
            btnStart.classList.add('btn-ring-normal')
            btnPrev.classList.add('btn-ring-normal')
            break;

        }

    })

    btnPrev.addEventListener('click', function () {
        topUp = topUp - 930;
        if (topUp < 0) {
            topUp = 0;
        };
        cardsContainerRow.style.top = -topUp + 'px';

        if (clicks > 1) {
            clicks -= 1;
            endInvactive()
        } else {
            clicks = 1;
            startInvactive()
        }
        btn1.innerHTML = clicks;

        switch(clicks) {
            case 5:
            btnEnd.classList.remove('btn-ring-inactive')
            btnEnd.classList.add('btn-ring-normal') 
            btnNext.classList.remove('btn-ring-inactive')
            btnNext.classList.add('btn-ring-normal')
            btnPrev.classList.add('btn-ring-normal')
            btnStart.classList.add('btn-ring-normal')
            break;

            case 4:
            btnEnd.classList.remove('btn-ring-inactive')
            btnEnd.classList.add('btn-ring-normal') 
            btnNext.classList.remove('btn-ring-inactive')
            btnNext.classList.add('btn-ring-normal')
            btnPrev.classList.add('btn-ring-normal')
            btnStart.classList.add('btn-ring-normal')
            break;

            case 3:
            btnEnd.classList.remove('btn-ring-inactive')
            btnEnd.classList.add('btn-ring-normal') 
            btnNext.classList.remove('btn-ring-inactive')
            btnNext.classList.add('btn-ring-normal')
            btnPrev.classList.add('btn-ring-normal')
            btnStart.classList.add('btn-ring-normal')
            break;

            case 2:
            btnEnd.classList.remove('btn-ring-inactive')
            btnEnd.classList.add('btn-ring-normal') 
            btnNext.classList.remove('btn-ring-inactive')
            btnNext.classList.add('btn-ring-normal')
            btnPrev.classList.add('btn-ring-normal')
            btnStart.classList.add('btn-ring-normal')
            break;

            case 1:
            btnStart.classList.add('btn-ring-inactive')
            btnStart.classList.remove('btn-ring-normal') 
            btnPrev.classList.add('btn-ring-inactive')
            btnPrev.classList.remove('btn-ring-normal')
            btnEnd.classList.remove('btn-ring-inactive')
            btnEnd.classList.add('btn-ring-normal') 
            btnNext.classList.remove('btn-ring-inactive')
            btnNext.classList.add('btn-ring-normal')
            break;
        }
    })

    btnEnd.addEventListener('click', function () {
        topUp = topUp + 4650;
        if (topUp > 4650) {
            topUp = 4650;
        };
        cardsContainerRow.style.top = -topUp + 'px';
        clicks = 6;
        btn1.innerHTML = clicks;
        endInvactive();
    })

    btnStart.addEventListener('click', function () {
        topUp = topUp - 4650;
        if (topUp < 0) {
            topUp = 0;
        };
        cardsContainerRow.style.top = -topUp + 'px';
        clicks = 1;
        btn1.innerHTML = clicks;
        startInvactive();
    })

});