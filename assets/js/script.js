// Custom JavaScript goes here
$(document).ready(function() {
  console.log('jQuery is working!');
});


// CURRENT YEAR IN COPYRIGHT SECTION
document.getElementById("year").textContent = new Date().getFullYear();


// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


// TESTIMONIALS - CAROUSEL
const container = document.getElementById("carouselStrip");
const dots = document.querySelectorAll(".dot");
const slideWidth = 612; // Slide width + gap

function scrollCarouselLeft() {
  container.scrollBy({ left: -slideWidth, behavior: "smooth" });
}

function scrollCarouselRight() {
  container.scrollBy({ left: slideWidth, behavior: "smooth" });
}

function goToSlide(index) {
  container.scrollTo({ left: index * slideWidth, behavior: "smooth" });
  setActiveDot(index);
}

function setActiveDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}