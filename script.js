const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
const matrix = document.querySelector('.matrix');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// A lightweight digital-rain layer keeps the red Matrix atmosphere in the background.
if (matrix && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const columnCount = Math.min(Math.floor(window.innerWidth / 52), 30);
  const glyphs = '01アイウエオカキクケコサシスセソ#%&*+<>[]{}';

  for (let index = 0; index < columnCount; index += 1) {
    const stream = Array.from({ length: 34 + Math.floor(Math.random() * 34) }, () => glyphs[Math.floor(Math.random() * glyphs.length)]).join('\n');
    const column = document.createElement('span');
    column.className = 'matrix-column';
    column.textContent = stream;
    column.style.left = `${(index / columnCount) * 100 + Math.random() * 2}%`;
    column.style.setProperty('--fall-time', `${10 + Math.random() * 15}s`);
    column.style.setProperty('--fall-delay', `${-Math.random() * 22}s`);
    matrix.append(column);
  }
}
