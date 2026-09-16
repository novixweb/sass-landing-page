// ==================== Navigation Menu ====================

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navLink = document.querySelectorAll('.nav__link');

// Show / hide mobile menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target))
    navMenu.classList.remove('show-menu');
});

// ==================== Header on Scroll ====================

// Change header background when scrolling
function scrollHeader() {
  const nav = document.getElementById('header__navbar');
  nav.classList.toggle('scroll-header', this.scrollY >= 80);
}

window.addEventListener('scroll', scrollHeader);

// ==================== Close Menu ====================

// Close mobile menu after clicking a link
const linkAction = () => navMenu.classList.remove('show-menu');

navLink.forEach((n) => n.addEventListener('click', linkAction));

// ==================== Active Navigation Link ====================

// Highlight the current section in navigation
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const navLink = document.querySelector(
      `.nav__menu a[href='#${sectionId}']`,
    );

    if (!navLink) return;

    navLink.classList.toggle(
      'active-link',
      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight,
    );
  });
}

window.addEventListener('scroll', scrollActive);

// ==================== Scroll Up Button ====================

// Show scroll-up button after scrolling down
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  scrollUp.classList.toggle('show-scroll', window.scrollY >= 560);
}

window.addEventListener('scroll', scrollUp);

// ==================== Dark / Light Theme ====================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bi-toggle-on';

// Get saved theme and icon
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get current theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

// Get current icon
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bi-toggle-off' : 'bi-toggle-on';

// Apply saved theme
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme,
  );

  themeButton.classList[selectedIcon === 'bi-toggle-off' ? 'add' : 'remove'](
    iconTheme,
  );
}

// Toggle theme
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
