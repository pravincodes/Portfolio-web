AOS.init();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("toast").classList.remove("hidden");
  setTimeout(() => document.getElementById("toast").classList.add("hidden"), 3000);
  this.reset();
});
function scrollCarousel(direction) {
  const carousel = document.getElementById('project-carousel');
  const scrollAmount = 350;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

