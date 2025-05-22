const galleryContainer = document.getElementById("gallery");
const totalImages = 5; // Update based on your actual image count

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `gallery/photo${i}.jpeg`;
  img.alt = `Photography ${i}`;
  img.className =
    "rounded-lg shadow-lg hover:scale-105 transition duration-300 object-cover w-full h-64";
  galleryContainer.appendChild(img);
}
