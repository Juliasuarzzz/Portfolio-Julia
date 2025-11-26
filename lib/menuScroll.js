
export function menuScroll() {
  const nav = document.querySelector(".navbar");

  const links = document.querySelectorAll('.nav-link');

  const sections = document.querySelectorAll("section");

  if (!nav) return; // evita errores si no existe

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active')); // Quita active de todos
      link.classList.add('active'); // Activa el seleccionado
    });
  });

  
}
