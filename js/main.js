document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.site-header__burger');
  const nav = document.getElementById('main-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('site-header__burger--open');
    nav.classList.toggle('site-nav--open', open);
    burger.setAttribute('aria-expanded', open);
  });

  nav.addEventListener('click', (e) => {
    if (e.target.matches('.site-nav__link')) {
      burger.classList.remove('site-header__burger--open');
      nav.classList.remove('site-nav--open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});