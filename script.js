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
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  function toggleTheme() {
    console.log("theme")
    const isDark = document.documentElement.classList.toggle('dark');
    console.log(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }