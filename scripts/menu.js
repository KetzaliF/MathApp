
var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('show');
  document.querySelector( ".menu__options" ).classList.toggle("show");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);