//Les elements

const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

//Les évenements à faire
btn.addEventListener("click",() => {
    menu.classList.toggle("hidden");
});