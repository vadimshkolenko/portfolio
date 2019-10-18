let button = document.querySelector('.menu-button'),
    menu = document.querySelector('.menu'),
    links = document.querySelectorAll('.menu button');

button.addEventListener('click', () => {
    button.classList.toggle('menu-button__active');
    menu.classList.toggle('menu__active');
});

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        button.classList.toggle('menu-button__active');
        menu.classList.toggle('menu__active');
    });
}

const scrollingLinks = document.querySelectorAll('[data-scroll-link]');

const scrollToElement = (evt) => {
  const target = evt.target,
        scrollTo = document.getElementById(target.dataset.scrollLink);
  
  scrollTo.scrollIntoView();
};

scrollingLinks.forEach(link => link.addEventListener('click', scrollToElement));