const navTogler = document.querySelector('.nav__togler');
const navList = document.querySelector('.nav__list');
let toglerIndex = 1;

navTogler.addEventListener('click', changeNav);
navList.addEventListener('click', closeNav);

function changeNav(e) {
    navList.style.display = toglerIndex % 2 ? 'flex' : 'none';
    toglerIndex++;
}

function closeNav() {
    navList.style.display = 'none';
    toglerIndex++;
}