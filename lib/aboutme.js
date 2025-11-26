export function initAboutMeObserver() {
  const section = document.querySelector(".pagina-about-me");
  if (!section) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("appear");
        // 👇 Deja de observar para que no se vuelva a quitar
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,              // activa cuando ~20% es visible
    rootMargin: "0px 0px -10% 0px" // evita disparos al borde
  });

  observer.observe(section);

  return () => observer.disconnect();
}
