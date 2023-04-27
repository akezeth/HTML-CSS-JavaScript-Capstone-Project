const activePage = window.location.href;
const githublink = 'https://akezeth.github.io/HTML-CSS-JavaScript-Capstone-Project/';

if (githublink === activePage) {
  activePage = activePage.concat('index.html')
}

document.querySelectorAll('nav a').forEach((link) => {
  const linkrefs = link.getAttribute('href');
  const linkref = linkrefs.substring(2);
  if (linkref === activePage.substring(githublink.length)) {
    link.classList.add('active');
  }
});
