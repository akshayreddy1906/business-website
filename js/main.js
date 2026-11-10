document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Placeholder: connect this form to a service (e.g. Formspree, Netlify Forms) to receive messages.
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  e.target.querySelector('.form-status').textContent = 'Thanks! We will get back to you soon.';
  e.target.reset();
});
