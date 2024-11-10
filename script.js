
const logo = document.querySelector('.logo');
const mapMarker = document.querySelector('.mapMarker');
const phone = document.querySelector('.phone');


const navLinks = document.querySelectorAll('.header-nav__links');
const h1 = document.querySelector('h1');
console.log('h1: ', h1);
const testStrokeItems = document.querySelectorAll('.text-stroke');
const btnRequest = document.querySelector('.btn-request');


const subMenuItems = document.querySelectorAll('.sub-menu__item');
const subMenu = document.querySelector('.wrapper__sub-menu');
const mainPromo = document.querySelector('.main-promo');


const h1_addElem = '<span class="text-stroke">в Москве и Московской области</span>' 

// logo.src = '/img/Logo__active.svg';
// mapMarker.src = '/img/Map Marker__active.svg';
// phone.src = '/img/Phone__active.svg';

subMenuItems[0].addEventListener('click', () => {
    logo.src = '/img/Logo__active.svg';
    mapMarker.src = '/img/Map Marker__active.svg';
    phone.src = '/img/Phone__active.svg';
    subMenu.style.backgroundImage = 'url("")';
    mainPromo.style.backgroundImage = 'url(./img/bg-menu1.png)';
    navLinks[0].classList.add('active');
    navLinks[1].classList.add('active');
    h1.classList.add('active');
    h1.textContent = 'Услуги по ремонту';
    testStrokeItems[0].classList.add('active');
    testStrokeItems[1].classList.add('active');
    // testStrokeItems[1].textContent = 'в Москве и Московского области';
    btnRequest.classList.add('active');




})