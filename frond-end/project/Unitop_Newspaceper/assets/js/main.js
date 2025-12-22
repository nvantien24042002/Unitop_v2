const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');

menuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
  menuToggle.classList.toggle('active');
});
