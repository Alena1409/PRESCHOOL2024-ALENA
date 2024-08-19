document.addEventListener("DOMContentLoaded", function () {

    // burger-menu

    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open');
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

    // slider

    let offset = 0; // смещение от левого края
    const friendsWrapperItems = document.querySelector('.friends-wrapper-items');

    document.querySelector('.btn-arrow-next').addEventListener('click', function () {
        offset = offset + 360; // offset += 270
        if (offset > 1944) {
            offset = 0;
        }
        friendsWrapperItems.style.left = -offset + 'px';
    });

    document.querySelector('.btn-arrow-prev').addEventListener('click', function () {
        offset = offset - 360; // offset += 270
        if (offset < 0) {
            offset = 1800;
        }
        friendsWrapperItems.style.left = -offset + 'px';
    });


    //modal-windows
    let pop = document.querySelector('.pop');
    let modal = pop.querySelectorAll('.modal');

    document.querySelectorAll('.friends-wrapper-items .friends-card').forEach(pats => {
        pats.onclick = () => {
            let name = pats.getAttribute('data-name');
            modal.forEach(text => {
                let target = text.getAttribute('data-target');
                if (name == target) {
                    text.classList.add('active');
                    document.getElementById('body').classList.add('stop-scroll');
                };
            })
        };
    });

    modal.forEach(close => {
        close.querySelector('.btn-modal').onclick = () => {
            close.classList.remove('active');
            document.getElementById('body').classList.remove('stop-scroll');
        };
    });

})