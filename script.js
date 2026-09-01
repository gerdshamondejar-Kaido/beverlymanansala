const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const themeToggle = document.querySelector(".theme-toggle");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolioTheme",
    document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("portfolioTheme") === "dark") {
  document.body.classList.add("dark");
}

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Subtle desktop photo movement for a more polished hero animation.
const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    heroPhoto.style.transform = `translate(${x}px, ${y}px)`;
  });
}
