const activePage = window.location.pathname;
document.querySelectorAll('nav a').forEach((link) => {
  const linkrefs = link.getAttribute('href');
  const linkref = linkrefs.substring(1);
  if (linkref === activePage) {
    link.classList.add('active');
  }
});