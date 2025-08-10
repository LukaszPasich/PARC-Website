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
const slides = Array.from(container.children);
const dots = document.querySelectorAll(".dot");
const slideWidth = 736; // Slide width + gap

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

function setActiveSlide() {
    const carouselRect = container.getBoundingClientRect();
    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const distance = Math.abs(slideCenter - carouselCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    slides.forEach((slide, i) => {
      slide.classList.toggle('active-slide', i === closestIndex);
    });
  }

  container.addEventListener('scroll', () => {
    window.requestAnimationFrame(setActiveSlide);
  });

setActiveSlide();

