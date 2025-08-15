// CURRENT YEAR IN COPYRIGHT SECTION
document.getElementById("year").textContent = new Date().getFullYear();

// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
});

// TESTIMONIALS - CAROUSEL
const container = document.getElementById("carouselStrip");
const slides = Array.from(container.children);
const dots = document.querySelectorAll(".dot");
const slideWidth = container.querySelector(".slide").offsetWidth + 16; // Slide width + gap

// function scrollCarouselLeft() {
//   container.scrollBy({ left: -slideWidth, behavior: "smooth" });
// }

// function scrollCarouselRight() {
//   container.scrollBy({ left: slideWidth, behavior: "smooth" });
// }

// Auto-scroll every 3 seconds
setInterval(() => {
  // Scroll right by one slide
  container.scrollBy({ left: slideWidth, behavior: "smooth" });

  // If near the end, loop back to start
  if (
    container.scrollLeft + container.clientWidth >=
    container.scrollWidth - slideWidth
  ) {
    setTimeout(() => {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }, 1200); // short delay so the last scroll finishes first
  }
}, 4800);

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
    slide.classList.toggle("active-slide", i === closestIndex);
  });

  setActiveDot(closestIndex);
}

container.addEventListener("scroll", () => {
  window.requestAnimationFrame(setActiveSlide);
});

setActiveSlide();

// TESTIMONIALS

const testimonials = [
  {
    // testimonial 1
    image: "assets/images/testimonial-1.jpg",
    imageAlt: "Image of Angie at PCHEI 2024 Conference",
    header: "PCHEI Conference 2024",
    body: `I found the workshop well paced and a great opportunity to reflect with colleagues on hidden privilege, assumptions and unconscious bias.
      The framing of Cultural Humility was particularly valuable.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 2
    image: "assets/images/testimonial-2.jpg",
    imageAlt: "Image of Angie at PCHEI 2024 Conference",
    header: "PCHEI Conference 2024",
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 3
    image: "assets/images/testimonial-3.jpg",
    imageAlt: "Image of Angie at PSI 2023 Workshop",
    header: "PSI Workshop 2023",
    body: `The way it was delivered, the reflection space created by the facilitator and the exercises. Angie was very engaging.`,
    small: "- Workshop attendee",
  },
  {
    // testimonial 4
    image: "assets/images/testimonial-4.jpg",
    imageAlt: "Image of Angie at PSI 2023 Workshop",
    header: "PSI Workshop 2023",
    body: `Informal and inclusive atmosphere, discussion and opportunity to explore the real life implications of EDI.`,
    small: "- Workshop attendee",
  },
  {
    // testimonial 5
    image: "assets/images/testimonial-5.jpg",
    imageAlt: "Image of Liliana at PSI 2023 Workshop",
    header: "PSI Workshop 2023",
    body: `I thought Liliana’s way of presenting the information was brilliant. She was able to communicate key concepts in an easily understood manner.
      I appreciated her examples from her own clinical practice as well.`,
    small: "- Workshop attendee",
  },
  {
    // testimonial 6
    image: "assets/images/testimonial-6.jpg",
    imageAlt: "Image of Liliana at PSI 2023 Workshop",
    header: "PSI Workshop 2023",
    body: `More training like this would be WELCOMED on the course. It was fantastic.`,
    small: "- 3rd Year DCounsPsych Trainee",
  },
  {
    // testimonial 7
    image: "assets/images/testimonial-7.jpg",
    imageAlt: "Image of Liliana at PSI 2023 Workshop",
    header: "PSI Workshop 2023",
    body: `Excellent workshop… It was very thought provoking and worthwhile.
      Very important and timely topic, challenging our own assumptions and biases - more please!!`,
    small: "- Workshop attendee",
  },
  {
    // testimonial 8
    image: "assets/images/testimonial-8.jpg",
    imageAlt: "Image of Liliana and Angie",
    header: "PSI Workshop 2023",
    body: `“I expected a lecture, but I got pleasantly surprised by the presentation and enjoyed myself.
    I got a bunch of reflections as homework. Thank you very much.`,
    small: "- Workshop attendee",
  },
  {
    // testimonial 9
    image: "assets/images/testimonial-9.jpg",
    imageAlt: "Image of Liliana and Angie at IAHIP 2024 Conference",
    header: "IAHIP Conference 2024",
    body: `“I really enjoyed the opening segment with Liliana and Angie. It was engaging, interesting and well presented.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 10
    image: "assets/images/testimonial-8.jpg",
    imageAlt: "Image of Liliana and Angie",
    header: "IAHIP Conference 2024",
    body: `I also enjoyed the input in the morning session which was of a high standard, thought provoking and relevant.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 11
    image: "assets/images/testimonial-9.jpg",
    imageAlt: "Image of Angie at IAHIP 2024 Conference",
    header: "IAHIP Conference 2024",
    body: `The day was well structured, initial presentation around discrimination was excellent.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 12
    image: "assets/images/testimonial-8.jpg",
    imageAlt: "Image of Liliana and Angie",
    header: "IAHIP Conference 2024",
    body: `Angie and Liliana’s presentation was so good and very relevant.`,
    small: "- Conference attendee",
  },
  {
    // testimonial 13
    image: "assets/images/testimonial-9.jpg",
    imageAlt: "Image of Angie at IAHIP 2024 Conference",
    header: "IAHIP Conference 2024",
    body: `The two speakers presenting Diversity within mental health were exceptionally interesting and I enjoyed the talk very much.`,
    small: "- Conference attendee",
  },
];

function fillCards(dataArray) {
  const cardElements = document.querySelectorAll(".testimonial");

  dataArray.forEach((data, index) => {
    if (cardElements[index]) {
      const card = cardElements[index];
      card.querySelector("img").src = data.image;
      card.querySelector("img").alt = data.imageAlt;
      card.querySelector(".testimonial-header").textContent = data.header;
      card.querySelector(".testimonial-body").textContent = data.body;
      card.querySelector(".testimonial-small").textContent = data.small;
    }
  });
}

fillCards(testimonials);
