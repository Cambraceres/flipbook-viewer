let currentPage = 0;
let totalPages = 25; // Set to 25 samples; adjust to 50 or more as needed
let images = [
  "https://i.postimg.cc/YCzZjY2r/sample1-page-0001.jpg", // Sample 1
  "https://i.postimg.cc/ryYS70wY/sample2-page-0001.jpg", // Sample 2
  "https://i.postimg.cc/XYxFcpm8/sample3-page-0001.jpg", // Sample 3
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+4", // Placeholder for page 4
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+5", // Placeholder for page 5
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+6", // Placeholder for page 6
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+7", // Placeholder for page 7
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+8", // Placeholder for page 8
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+9", // Placeholder for page 9
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+10", // Placeholder for page 10
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+11", // Placeholder for page 11
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+12", // Placeholder for page 12
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+13", // Placeholder for page 13
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+14", // Placeholder for page 14
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+15", // Placeholder for page 15
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+16", // Placeholder for page 16
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+17", // Placeholder for page 17
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+18", // Placeholder for page 18
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+19", // Placeholder for page 19
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+20", // Placeholder for page 20
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+21", // Placeholder for page 21
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+22", // Placeholder for page 22
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+23", // Placeholder for page 23
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+24", // Placeholder for page 24
  "https://via.placeholder.com/1229x819.png?text=Sample+Page+25"  // Placeholder for page 25
];

function prevPage() {
  const pageElement = document.querySelector(".page");
  pageElement.classList.add("flip-left"); // Add flip animation
  setTimeout(() => {
    currentPage = (currentPage - 1 + totalPages) % totalPages; // Loop to end if at 0
    updateFlipbook();
  }, 300); // Match the animation duration (0.6s / 2)
}

function nextPage() {
  const pageElement = document.querySelector(".page");
  pageElement.classList.add("flip-right"); // Add flip animation
  setTimeout(() => {
    currentPage = (currentPage + 1) % totalPages; // Loop to 0 if at end
    updateFlipbook();
  }, 300); // Match the animation duration (0.6s / 2)
}

function updateFlipbook() {
  const pageImg = document.querySelector(".page img");
  pageImg.src = images[currentPage];
  pageImg.alt = `Sample Page ${currentPage + 1}`; // Update alt text dynamically
  console.log('Page changed to:', currentPage);
}

// Initialize the first page
updateFlipbook();