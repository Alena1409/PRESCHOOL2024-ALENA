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
