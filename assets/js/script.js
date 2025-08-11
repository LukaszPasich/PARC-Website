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
const slideWidth = container.querySelector('.slide').offsetWidth + 16; // Slide width + gap

// function scrollCarouselLeft() {
//   container.scrollBy({ left: -slideWidth, behavior: "smooth" });
// }

// function scrollCarouselRight() {
//   container.scrollBy({ left: slideWidth, behavior: "smooth" });
// }


// Auto-scroll every 3 seconds
  setInterval(() => {
    // Scroll right by one slide
    container.scrollBy({ left: slideWidth, behavior: 'smooth' });

    // If near the end, loop back to start
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - slideWidth) {
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' });
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
      slide.classList.toggle('active-slide', i === closestIndex);
    });
    
    setActiveDot(closestIndex);
  }

  container.addEventListener('scroll', () => {
    window.requestAnimationFrame(setActiveSlide);
  });

setActiveSlide();

// TESTIMONIALS

const testimonials = [
  {
    // testimonial 1
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 2
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendaaa'
  },
  {
    // testimonial 3
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 4
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 5
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 6
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 7
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 8
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 9
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 10
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 11
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 12
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  },
  {
    // testimonial 13
    image: 'assets/images/testimonial-1.jpg',
    imageAlt: 'Image of Angie at PCHEI 2024 Conference',
    header: 'PCHEI Conference 2024',
    body: `I thoroughly enjoyed the workshop and felt challenged to think about this fascinating area in a compassionate space.`,
    small: '- Conference attendee'
  }
];

function fillCards(dataArray) {
  const cardElements = document.querySelectorAll('.testimonial');
  
  dataArray.forEach((data, index) => {
    if (cardElements[index]) {
      const card = cardElements[index];
      card.querySelector('img').src = data.image;
      card.querySelector('img').alt = data.imageAlt;
      card.querySelector('.testimonial-header').textContent = data.header;
      card.querySelector('.testimonial-body').textContent = data.body;
      card.querySelector('.testimonial-small').textContent = data.small;
    }
  });
}

fillCards(testimonials);