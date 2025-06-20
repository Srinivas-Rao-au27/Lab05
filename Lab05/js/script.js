const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');
const html = document.documentElement;
const body = document.body;

darkBtn.addEventListener('click', () => {
  html.setAttribute('data-bs-theme', 'dark');
  darkBtn.classList.add('active');
  lightBtn.classList.remove('active');
  body.style.backgroundColor = '#1c1f22';
  body.style.color = 'white';
});

lightBtn.addEventListener('click', () => {
  html.setAttribute('data-bs-theme', 'light');
  lightBtn.classList.add('active');
  darkBtn.classList.remove('active');
  body.style.backgroundColor = '#f8f9fa';
  body.style.color = '#000';
});
