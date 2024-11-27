const toggleTheme = document.getElementById('toggleTheme');
const html = document.documentElement;

toggleTheme.addEventListener('click', () => {
  
  const currentTheme = html.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'light');
    toggleTheme.className = 'bi bi-sun'; 
  } else {
    html.setAttribute('data-theme', 'dark');
    toggleTheme.className = 'bi bi-sun-fill';
  }
});

const menulinks = document.querySelectorAll(".menu__link");

menulinks.forEach(item => {
  item.addEventListener("click", () => {
    menulinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})
