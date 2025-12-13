// Smooth scroll for internal links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');

    if (target && target.startsWith("#") && document.querySelector(target)) {
      //e.preventDefault();
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
// Typewriter Effect
const words = [
  "a Web Developer",
  "a SharePoint Developer",
  "a Salesforce CRM Analyst",
  "an XML Developer",
  "a UI/UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typeElement = document.querySelector(".typewriter-text");

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typeElement.textContent = currentWord.substring(0, charIndex++);
  } else {
    typeElement.textContent = currentWord.substring(0, charIndex--);
  }

  // Speed controls
  let speed = isDeleting ? 80 : 120;

  // Word completed
  if (charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  }

  // Word deleted
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
