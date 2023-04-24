const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.getAttribute('href') == activePage) {
    link.classList.add('active');
  }
});