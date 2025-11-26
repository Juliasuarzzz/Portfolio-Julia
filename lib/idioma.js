export function idioma() {
  const esElements = document.querySelectorAll('.esp');
  const enElements = document.querySelectorAll('.en');

  const btnEs = document.getElementById("btn-es");
  const btnEn = document.getElementById("btn-en");

  if (!btnEs || !btnEn) {
    console.error("Botones de idioma no encontrados");
    return;
  }

  // ✅ FUNCIÓN PARA ACTIVAR IDIOMA
  function activarIdioma(lang) {
    if (lang === 'es') {
      esElements.forEach(el => el.style.display = 'block');
      enElements.forEach(el => el.style.display = 'none');

      btnEs.classList.add("active");
      btnEn.classList.remove("active");
    }

    if (lang === 'en') {
      esElements.forEach(el => el.style.display = 'none');
      enElements.forEach(el => el.style.display = 'block');

      btnEn.classList.add("active");
      btnEs.classList.remove("active");
    }
  }

  // ✅ ESTADO INICIAL
  activarIdioma("es");

  // ✅ EVENTOS CLICK
  btnEs.addEventListener("click", () => activarIdioma("es"));
  btnEn.addEventListener("click", () => activarIdioma("en"));
}

