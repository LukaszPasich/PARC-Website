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
