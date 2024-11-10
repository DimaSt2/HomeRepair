
const logo = document.querySelector('.logo');
const mapMarker = document.querySelector('.mapMarker');
const mapMarkerWrap = document.querySelector('.header__mapmarker');
const phone = document.querySelector('.phone');
const phoneWrap = document.querySelector('.header__phone');

const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.header-nav__links');
const h1 = document.querySelector('h1');
const testStrokeItems = document.querySelectorAll('.text-stroke');
const btnRequest = document.querySelector('.btn-request');

const subMenuItems = document.querySelectorAll('.sub-menu__item');
const subMenu = document.querySelector('.wrapper__sub-menu');
const mainPromo = document.querySelector('.main-promo');

function changeTheme (index) {
    logo.src = '/img/Logo__active.svg';
    mapMarker.src = '/img/Map Marker__active.svg';
    phone.src = '/img/Phone__active.svg';
    subMenu.style.backgroundImage = 'url("")';
    header.classList.add('active');
    mapMarkerWrap.classList.add('active');
    phoneWrap.classList.add('active');
    navLinks[0].classList.add('active');
    navLinks[1].classList.add('active');
    h1.classList.add('active');
    testStrokeItems[1].classList.add('active');
    btnRequest.classList.add('active');
    switch(index) {
        case 0:
            mainPromo.style.backgroundImage = 'url(./img/bg-menu1.png)';
            h1.textContent = 'Услуги по ремонту';
            break;
        case 1:
            mainPromo.style.backgroundImage = 'url(./img/bg-menu2.png)';
            h1.textContent = 'Виды работ по ремонту';
            break;
        case 2:
            mainPromo.style.backgroundImage = 'url(./img/bg-menu3.png)';
            h1.textContent = 'Дизайн интерьера';
            break;
        case 3:
            mainPromo.style.backgroundImage = 'url(./img/bg-menu4.png)';
            h1.textContent = 'Ремонт помещений';
            break;
        
    }
}

subMenuItems.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        changeTheme(index)})
})