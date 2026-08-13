const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const aboutSection = document.querySelector('#about');
const scrollTopButton = document.querySelector('.scroll-top');

const updateScrollButton = () => {
  const hasReachedAbout = aboutSection && window.scrollY >= aboutSection.offsetTop - 120;
  scrollTopButton?.classList.toggle('is-visible', Boolean(hasReachedAbout));
};

window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
