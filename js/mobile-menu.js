const menuIcon = document.querySelector('#menuIcon');
const navBottom = document.querySelector('.navBottom');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const headline = document.querySelector('#headline');

// ============================= toggle hamburger icon ===========================
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navBottom.classList.toggle('active');
  navbar.classList.toggle('active');
  logo.classList.toggle('active');
  headline.classList.toggle('active');
});

// ========= remove toggle icon and navbar when user click navbar link (scroll) =========
window.onscroll = () => {
  menuIcon.classList.remove('fa-xmark');
  navBottom.classList.remove('active');
  navbar.classList.remove('active');
  logo.classList.remove('active');
  headline.classList.remove('active');
};