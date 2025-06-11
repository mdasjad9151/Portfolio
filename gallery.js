const cylinder = document.getElementById("cylinder");
const totalImages = 8;
const faceAngle = 360 / totalImages;

// Calculate radius based on container width
const container = cylinder.parentElement;
const containerWidth = container.offsetWidth;
const radius = containerWidth *3/4; // adjust proportionally

for (let i = 0; i < totalImages; i++) {
  const angle = i * faceAngle;
  const face = document.createElement("div");
  face.className = "cylinder-face";
  face.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

  const img = document.createElement("img");
  img.src = `gallery/photo${i + 1}.jpeg`;
  img.alt = `Photography ${i + 1}`;

  face.appendChild(img);
  cylinder.appendChild(face);
}

let rotation = 0;
setInterval(() => {
  rotation += 0.2;
  cylinder.style.transform = `rotateY(${rotation}deg)`;
}, 30);

// Optional: Recalculate radius on window resize
window.addEventListener("resize", () => {
  location.reload(); // Simplest way to reinitialize layout
});
