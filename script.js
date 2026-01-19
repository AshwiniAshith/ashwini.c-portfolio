const words = [
  "a Web Developer",
  "a SharePoint Developer",
  "a Salesforce CRM Analyst",
  "an XML Developer",
  "a UI/UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeElement = document.querySelector(".typewriter-text");

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
    typeElement.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex--;
    typeElement.textContent = currentWord.substring(0, charIndex);
  }

  let speed = isDeleting ? 80 : 120;

  // ✅ Pause AFTER full word is visible
  if (!isDeleting && charIndex === currentWord.length) {
    speed = 5000;   // 5 seconds pause
    isDeleting = true;
  }

  // Move to next word after delete
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
