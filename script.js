let currentPage = 0;
let totalPages = 53; // Updated to 53 pages
let images = [
  "https://i.postimg.cc/vZ1My5n8/1.jpg",
  "https://i.postimg.cc/CL5HFKxL/2.jpg",
  "https://i.postimg.cc/c1X296zs/3.jpg",
  "https://i.postimg.cc/52R4BmhL/4.jpg",
  "https://i.postimg.cc/h4d2cP4B/5.jpg",
  "https://i.postimg.cc/3RSQhr3p/6.jpg",
  "https://i.postimg.cc/0yMYdV6q/7.jpg",
  "https://i.postimg.cc/YSjCmPj1/8.jpg",
  "https://i.postimg.cc/0N69NJHn/9.jpg",
  "https://i.postimg.cc/rmL7L06K/10.jpg",
  "https://i.postimg.cc/FzzptNKY/11.jpg",
  "https://i.postimg.cc/VLygZQ8k/12.jpg",
  "https://i.postimg.cc/522Cnn6t/13.jpg",
  "https://i.postimg.cc/BbJ6tnFv/14.jpg",
  "https://i.postimg.cc/C59Qmz4h/15.jpg",
  "https://i.postimg.cc/P5MkrQ41/16.jpg",
  "https://i.postimg.cc/1twBsJ0Q/17.jpg",
  "https://i.postimg.cc/4NN6SJ0Z/18.jpg",
  "https://i.postimg.cc/8krckxrW/19.jpg",
  "https://i.postimg.cc/X7kVpWNZ/20.jpg",
  "https://i.postimg.cc/W4P6SMLY/21.jpg",
  "https://i.postimg.cc/tgWyGGcC/22.jpg",
  "https://i.postimg.cc/1X6Yfypf/23.jpg",
  "https://i.postimg.cc/V6h3J7pH/24.jpg",
  "https://i.postimg.cc/sgBKXjsy/25.jpg",
  "https://i.postimg.cc/SxyDpBx7/26.jpg",
  "https://i.postimg.cc/qqTZ6z4W/27.jpg",
  "https://i.postimg.cc/mk4BZLqg/28.jpg",
  "https://i.postimg.cc/vTxfyvJs/29.jpg",
  "https://i.postimg.cc/zfRyVfdC/30.jpg",
  "https://i.postimg.cc/PJNs5Cyh/31.jpg",
  "https://i.postimg.cc/FzkW63Gf/32.jpg",
  "https://i.postimg.cc/NfYCD9m0/33.jpg",
  "https://i.postimg.cc/v8vtQPxQ/34.jpg",
  "https://i.postimg.cc/5N4d0kPp/35.jpg",
  "https://i.postimg.cc/9My0WNxC/36.jpg",
  "https://i.postimg.cc/8sQb73G4/37.jpg",
  "https://i.postimg.cc/Z57zdF93/38.jpg",
  "https://i.postimg.cc/VNZnr6P4/39.jpg",
  "https://i.postimg.cc/Xqzzs35g/40.jpg",
  "https://i.postimg.cc/MThsBtJs/41.jpg",
  "https://i.postimg.cc/6qpQdVVv/42.jpg",
  "https://i.postimg.cc/Bn4JDBqQ/43.jpg",
  "https://i.postimg.cc/v8hhbQcq/44.jpg",
  "https://i.postimg.cc/8CnFt05b/45.jpg",
  "https://i.postimg.cc/zDQjVxFK/46.jpg",
  "https://i.postimg.cc/0QYzP2nV/47.jpg",
  "https://i.postimg.cc/qqHZ6Q8k/48.jpg",
  "https://i.postimg.cc/fWxM2rqf/49.jpg",
  "https://i.postimg.cc/pL8NrhNY/50.jpg",
  "https://i.postimg.cc/fR4z8hDC/51.jpg",
  "https://i.postimg.cc/hGL1XgP5/52.jpg",
  "https://i.postimg.cc/pVFK0zjt/53.jpg"
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