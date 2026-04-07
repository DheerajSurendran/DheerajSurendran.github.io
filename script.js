// Typing Effect
const words = ["Software Tester", "Web Developer", "ML Enthusiast"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) j--;
  else j++;

  document.getElementById("typing").textContent =
    currentWord.substring(0, j);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

type();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// AOS
AOS.init({
  duration: 1400,
  once: true,
  easing: "ease-in-out"
});