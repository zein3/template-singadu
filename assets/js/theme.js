const toggleTheme = () => {
  document.body.classList.toggle('dark');

  if (document.getElementsByClassName('dark').length !== 0) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});