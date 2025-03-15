let currentPage = 0;
let totalPages = 25; // Keeping it at 25 as per your list
let images = [
  "https://i.postimg.cc/tJVFrYYT/1.jpg",
  "https://i.postimg.cc/DfsgdMsc/2.jpg",
  "https://i.postimg.cc/nVYmLbBN/3.jpg",
  "https://i.postimg.cc/Dy0z3tgr/4.jpg",
  "https://i.postimg.cc/wBg8gNpC/5.jpg",
  "https://i.postimg.cc/HLBKmP3M/6.jpg",
  "https://i.postimg.cc/5N5WGpcB/7.jpg",
  "https://i.postimg.cc/qvBSFTxr/8.jpg",
  "https://i.postimg.cc/sf9nCLXg/9.jpg",
  "https://i.postimg.cc/85T6RZVZ/10.jpg",
  "https://i.postimg.cc/gjCcD0ZG/11.jpg",
  "https://i.postimg.cc/htgQWCXc/12.jpg",
  "https://i.postimg.cc/SxTSTV8Z/13.jpg",
  "https://i.postimg.cc/9QK3wkyj/14.jpg",
  "https://i.postimg.cc/RVhb1RSC/15.jpg",
  "https://i.postimg.cc/gJ0v9gBn/16.jpg",
  "https://i.postimg.cc/BZkzJzfW/17.jpg",
  "https://i.postimg.cc/8kMRrXrg/18.jpg",
  "https://i.postimg.cc/d1M7sv6k/19.jpg",
  "https://i.postimg.cc/MZ5G41Cj/20.jpg",
  "https://i.postimg.cc/W1kT2ZH8/21.jpg",
  "https://i.postimg.cc/sgpq64Lk/22.jpg",
  "https://i.postimg.cc/j5mr0d4m/23.jpg",
  "https://i.postimg.cc/RVxjcYs7/24.jpg",
  "https://i.postimg.cc/7ZG0wB4R/25.jpg"
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
  const pageElement = document.querySelector(".page");
  const pageImg = document.querySelector(".page img");
  pageImg.src = images[currentPage];
  pageImg.alt = `Sample Page ${currentPage + 1}`; // Update alt text dynamically
  setTimeout(() => {
    pageElement.classList.remove("flip-right", "flip-left");
  }, 10); // Small delay to retrigger animation
  console.log('Page changed to:', currentPage);
}

// Initialize the first page
updateFlipbook();