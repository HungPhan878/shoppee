const viewed = document.querySelector('.header-notify__item');

function myFunction(){
    viewed.classList.add('viewed');
}

viewed.addEventListener('click', myFunction);