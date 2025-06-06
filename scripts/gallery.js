// Portfolio Collection Data
const collections = [
  {
    name: "Spring Bloom",
    season: "Spring 2025",
    image: "images/summer2025.jpg"
  },
  {
    name: "Fall Fashions",
    season: "Fall 2025",
    image: "images/winterOffice.jpg"
  },
  {
    name: "Winter Wonders",
    season: "Winter 2024",
    image: "images/fallfashion.jpg"
  },
  {
    name: "Urban Minimal",
    season: "Fall 2024",
    image: "images/fallwear.jpg"
  },
  {
    name: "Silk & Shine",
    season: "Summer 2024",
    image: "images/silkShine.jpg"
  },
  {
    name: "Modern Roots",
    season: "Winter 2023",
    image: "images/modernRoot.jpg"
  }
];

// Render Portfolio Gallery
function renderGallery(items) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items.forEach((item, index) => {
    const html = `
      <div class="gallery-item" data-index="${index}">
        <img src="${item.image}" alt="${item.name}">
        <div class="gallery-overlay">
          <h3>${item.name}</h3>
          <p>${item.season}</p>
        </div>
      </div>
    `;
    gallery.insertAdjacentHTML("beforeend", html);
  });

  // Add click events to each item
  document.querySelectorAll(".gallery-item").forEach((el) => {
    el.addEventListener("click", () => {
      const index = el.getAttribute("data-index");
      openLightbox(items[index]);
    });
  });
}
// Open Lightbox
function openLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxSeason = document.getElementById("lightbox-season");

  lightboxImage.src = item.image;
  lightboxTitle.textContent = item.name;
  lightboxSeason.textContent = item.season;

  lightbox.classList.add("active");
}
// Lightbox Functionality
function openLightbox(item) {
  document.getElementById("lightbox-img").src = item.image;
  document.getElementById("lightbox-title").textContent = item.name;
  document.getElementById("lightbox-season").textContent = item.season;

  document.getElementById("lightbox").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  // Existing gallery render
  renderGallery(collections);

  // Close lightbox handler
  document.querySelector(".close-lightbox").addEventListener("click", () => {
    document.getElementById("lightbox").classList.add("hidden");
  });

  // Click outside image to close
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") {
      document.getElementById("lightbox").classList.add("hidden");
    }
  });
});
// Initialize the gallery on page load
document.addEventListener("DOMContentLoaded", () => {
    renderGallery(collections);
});
