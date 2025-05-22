const typeTarget = document.getElementById("typewriter");

// Break the text into parts
const before = "Hi, I'm ";
const name = "Mohd Asjad";

let i = 0;
let j = 0;

function typeWriter() {
  if (i < before.length) {
    typeTarget.innerHTML += before.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  } else if (j < name.length) {
    // Add characters inside span
    if (j === 0) {
      typeTarget.innerHTML += `<span class="highlight-name">`;
    }

    typeTarget.innerHTML = typeTarget.innerHTML.replace(
      /<span class="highlight-name">.*?<\/span>?$/,
      `<span class="highlight-name">${name.substring(0, j + 1)}</span>`
    );

    j++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);

// On page load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}



const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(theme) {
  if (theme === "dark") {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

function toggleTheme() {
  const isDark = html.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
}

// Load saved theme or system preference
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

toggleBtn.addEventListener("click", toggleTheme);
loadTheme();