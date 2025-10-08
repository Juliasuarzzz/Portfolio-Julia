export function initAboutMeObserver() {
  const section = document.querySelector(".pagina-about-me");
  const box = document.querySelector(".box-expe-about-me");
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando entra en pantalla
          section.classList.add("appear");

          setTimeout(() => {
            section.classList.add("appear2");
            if (box) box.classList.add("appear2");
          }, 1000);
        } else {
          // Cuando sale del viewport → quitar ambas clases
          section.classList.remove("appear", "appear2");
          if (box) box.classList.remove("appear2");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}
