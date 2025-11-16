// Smooth scroll only for internal links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');

    if (target.startsWith("#") && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
  });
});
