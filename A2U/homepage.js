document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');

  let currentIndex = 0; // Current active slide
  const totalSlides = dots.length; // Total number of slides

  // Function to show a specific slide
  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides; // Ensure wrapping
    const offset = currentIndex * 100; // Calculate offset
    carousel.style.transform = `translateX(-${offset}%)`; // Slide
    updateDots();
  }

  // Function to update active dots
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // Event Listeners for Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });

  // Auto-slide Functionality
  setInterval(() => {
    showSlide(currentIndex + 1); // Go to the next slide
  }, 3000); // Slide every 3 seconds

  // Initialize carousel
  showSlide(0);
});
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0; // Current active slide
  const totalSlides = dots.length; // Total number of slides
  // Function to show a specific slide
  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides; // Ensure wrapping
    const offset = currentIndex * 100; // Calculate offset
    carousel.style.transform = `translateX(-${offset}%)`; // Slide
    updateDots();
  }
  // Function to update active dots
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }
  // Event Listeners for Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });
  // Auto-slide Functionality
  setInterval(() => {
    showSlide(currentIndex + 1); // Go to the next slide
  }, 3000); // Slide every 3 seconds
  // Initialize carousel
  showSlide(0);
});


document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.animated-text');

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) { 
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});


const element = document.querySelector(".moto"); // Selects the element with class 'moto'
let text = element.innerText; // Get the text content (not HTML content)
let index = 0;
let isDeleting = false; // Track if deleting or typing
const speed = 110; // Typing/erasing speed in milliseconds

function typewriterEffect() {
if (isDeleting) {
  element.innerHTML = text.substring(0, index--); // Erase one character
} else {
  element.innerHTML = text.substring(0, index++); // Show one character
}

// Toggle between typing and erasing
if (index === text.length + 1) {
  isDeleting = true; // Start erasing
  setTimeout(typewriterEffect, 650); // Pause before erasing
} else if (index === 0) {
  isDeleting = false; // Start typing
  setTimeout(typewriterEffect, 500); // Pause before typing again
} else {
  setTimeout(typewriterEffect, speed); // Control typing/erasing speed
}
}

element.innerHTML = ""; // Start with an empty string
typewriterEffect(); // Start the effect