const cylinder = document.getElementById("cylinder");
const totalImages = 8; // Adjust based on actual count
const radius = 300; // Distance from center
const faceAngle = 360 / totalImages;

for (let i = 0; i < totalImages; i++) {
  const angle = i * faceAngle;
  const face = document.createElement("div");
  face.className = "cylinder-face";
  face.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

  const img = document.createElement("img");
  img.src = `gallery/photo${i + 1}.jpeg`; // Adjust path as needed
  img.alt = `Photography ${i + 1}`;

  face.appendChild(img);
  cylinder.appendChild(face);
}

// Optional: Continuous rotation
let rotation = 0;
setInterval(() => {
  rotation += 0.3; // degrees per frame
  cylinder.style.transform = `rotateY(${rotation}deg)`;
}, 30);
