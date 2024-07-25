let offsetPets = 0; // смещение от левого края
const cardsContainerRow = document.querySelector('.cards-container-row');


document.querySelector('.btn-paginator-next').addEventListener('click', function(){
    offsetPets = offsetPets + 930;
    if (offsetPets > 2760){
        offsetPets = 1860;
    };
    cardsContainerRow.style.top = -offsetPets + 'px';
});

document.querySelector('.btn-paginator-next-end').addEventListener('click', function(){
    offsetPets = offsetPets + 1860;
    if (offsetPets > 1860){
        offsetPets = 1860;
    };
    cardsContainerRow.style.top = -offsetPets + 'px';
});

document.querySelector('.btn-paginator-prev').addEventListener('click', function(){
    offsetPets = offsetPets - 930;
    if (offsetPets < 0){
        offsetPets = 0;
    };
    cardsContainerRow.style.top = -offsetPets + 'px';
});

document.querySelector('.btn-paginator-prev-start').addEventListener('click', function(){
    offsetPets = offsetPets - 1860;
    if (offsetPets < 0) {
        offsetPets = 0;
    };
    cardsContainerRow.style.top = -offsetPets + 'px';
});