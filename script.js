// script.js

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero");

  if (
    heroSection &&
    !heroSection.classList.contains("constellations-page") &&
    !heroSection.classList.contains("stars-page") &&
    !heroSection.classList.contains("deepskyobjects-page") &&
    !heroSection.classList.contains("skyevents-page")
  ) {
    const images = [
      "Images/HomePage/ann14029a.jpg",
      "Images/HomePage/moon-2048727_1920.jpg",
      "Images/HomePage/Screenshot (491).png",
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
      heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
      heroSection.classList.remove("show");
      setTimeout(() => {
        heroSection.classList.add("show");
      }, 100); // Slight delay to trigger the transition
      currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial background image
    changeBackgroundImage();

    // Change background image every 10 seconds
    setInterval(changeBackgroundImage, 10000);
  } else {
    heroSection.classList.add("show");
  }

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
