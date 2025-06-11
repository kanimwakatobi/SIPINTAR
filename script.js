// Highlight active nav link (basic logic if needed dynamically)
const links = document.querySelectorAll('nav a');
const path = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
});
