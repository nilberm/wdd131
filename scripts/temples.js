const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.textContent = isOpen ? "✕" : "☰";
  navToggle.setAttribute("aria-expanded", isOpen);
});
