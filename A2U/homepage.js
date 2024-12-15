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
