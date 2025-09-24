export function initIntroAnimations() {
  const intro = document.querySelector('.header-intro');
  const logoSpan = document.querySelectorAll('.port-web');
  const welcomeSpan = document.querySelectorAll('.welcome-to');
  const iconosIntro = document.querySelectorAll('.iconos-intro');
  const boxLink = document.querySelectorAll('.box-link');

  const retrasoInicial = 2000;
  const retrasoInicial2 = 1000;
  const retrasoInicial3 = 2300;

  // aparecer portfoolio
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('active');
    }, retrasoInicial + idx * 150);
  });

  // aparecer welcome to
  welcomeSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('active');
    }, retrasoInicial2 + idx * 310);
  });

  // aparecer iconos
  iconosIntro.forEach((img, idx) => {
    setTimeout(() => {
      img.classList.add('active');
    }, retrasoInicial2 + idx * 310);
  });

  // aparecer link
  boxLink.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('active');
    }, retrasoInicial3 + idx * 150);
  });
}
