// Smooth scroll for internal links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');

    if (target && target.startsWith("#") && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Auto close navbar in mobile view
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
