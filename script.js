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
// Open modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

// Close modal
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

// Close when clicking outside
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
