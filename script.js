let currentPage = 0;
let totalPages = 25;
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

function preloadImages() {
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
preloadImages();

function updateFlipbook() {
  const frontImg = document.querySelector(".front img");
  const backImg = document.querySelector(".back img");
  frontImg.src = images[currentPage];
  frontImg.alt = `Sample Page ${currentPage + 1}`;
  console.log('Page changed to:', currentPage);
}

function nextPage() {
  const frontPage = document.querySelector(".front");
  const backPage = document.querySelector(".back");
  const nextIndex = (currentPage + 1) % totalPages;
  backPage.querySelector("img").src = images[nextIndex];
  frontPage.classList.add("flip-right");
  setTimeout(() => {
    currentPage = nextIndex;
    updateFlipbook();
    frontPage.classList.remove("flip-right");
    frontPage.style.zIndex = 1;
    backPage.style.zIndex = 2;
    [frontPage.className, backPage.className] = [backPage.className, frontPage.className];
  }, 600);
}

function prevPage() {
  const frontPage = document.querySelector(".front");
  const backPage = document.querySelector(".back");
  const prevIndex = (currentPage - 1 + totalPages) % totalPages;
  backPage.querySelector("img").src = images[prevIndex];
  frontPage.classList.add("flip-left");
  setTimeout(() => {
    currentPage = prevIndex;
    updateFlipbook();
    frontPage.classList.remove("flip-left");
    frontPage.style.zIndex = 1;
    backPage.style.zIndex = 2;
    [frontPage.className, backPage.className] = [backPage.className, frontPage.className];
  }, 600);
}

updateFlipbook();