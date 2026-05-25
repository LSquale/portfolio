// Quand la page est chargée
document.addEventListener("DOMContentLoaded", () => {
  // On sélectionne toutes les images à faire apparaître
  const elements = document.querySelectorAll(".photo");

  // On crée un observateur
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // ne rejoue pas l'animation
      }
    });
  }, { threshold: 0.2 }); // 20% visible avant de déclencher

  // On observe chaque image
  elements.forEach(el => observer.observe(el));
});
