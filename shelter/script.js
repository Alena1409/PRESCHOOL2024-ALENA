document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open');
    });

    let offset = 0; // смещение от левого края
    const friendsWrapperItems = document.querySelector('.friends-wrapper-items');

    document.querySelector('.btn-arrow-next').addEventListener('click', function(){
        offset = offset + 360; // offset += 270
        if (offset > 1944) {
            offset = 0;
        }
        friendsWrapperItems.style.left = -offset + 'px';
    });

    document.querySelector('.btn-arrow-prev').addEventListener('click', function(){
        offset = offset - 360; // offset += 270
        if (offset < 0) {
            offset = 1800;
        }
        friendsWrapperItems.style.left = -offset + 'px';
    });

    let pop = document.querySelector('.pop');
    let modal = pop.querySelectorAll('.modal');

    document.querySelectorAll('.friends-wrapper-items .friends-card').forEach(pats => {
        pats.onclick = () => {
            let name = pats.getAttribute('data-name');
            modal.forEach(text => {
                let target = text.getAttribute('data-target');
                if (name == target) {
                    text.classList.add('active');
                };
            })
        };
    });

    modal.forEach(close => {
        close.querySelector('.btn-modal').onclick = () => {
            close.classList.remove('active');
        };
    })
    // let modal = document.querySelector('.modal');
    // let btnSecondary = document.querySelector('.btn-secondary');
    // let btnModal = document.querySelector('.btn-modal');

    // btnSecondary.addEventListener('click', function (){
    //     modal.style.display = 'block';
    //     document.body.style.overflow = "hidden";
    // });

    // btnModal.addEventListener('click', function () {
    //     modal.style.display = "none";
    //     document.body.style.overflow = "";
    // });



    



})