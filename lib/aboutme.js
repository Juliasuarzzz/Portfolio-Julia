export function initAboutMeObserver() {
  const section = document.querySelector(".info-box-about-me");
  if (!section) return;

  let appear2Added = false; // Para controlar que solo se añada una vez

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir appear inmediatamente
        section.classList.add("appear");

        // Añadir appear2 después de 1 segundo solo si no se ha añadido ya
        if (!appear2Added) {
          setTimeout(() => {
            section.classList.add("appear2");
            appear2Added = true; // marcamos que ya se añadió
          }, 1000);
        }
      } else {
        // Quitar appear al salir de vista, pero no tocar appear2
        section.classList.remove("appear");
        // appear2 permanece, así no se reinicia la animación si el usuario sube
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  });

  observer.observe(section);

  return () => observer.disconnect();
}
