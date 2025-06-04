// Add or remove dark mode from the body
// eslint-disable-next-line no-unused-vars
function ToggleDarkMode() {
  window.document.body.classList.toggle('dark-mode');
  if (window.document.body.classList.contains('dark-mode')) {
    localStorage.setItem('style', 'dark');
  } else {
    localStorage.setItem('style', 'light');
  }
}

// Get user theme preference from local storage
if (localStorage.getItem('style') === 'light') {
  window.document.body.classList.remove('dark-mode');
  window.document.body.querySelector('#toggleDiv input').checked = false;
} else {
  window.document.body.classList.add('dark-mode');
  window.document.body.querySelector('#toggleDiv input').checked = true;
}
