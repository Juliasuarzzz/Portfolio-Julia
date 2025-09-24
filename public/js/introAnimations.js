export function initIntroAnimations() {
    const intro = document.querySelector('.header-intro');
    const logoSpan = document.querySelectorAll('.port-web');
    const welcomeSpan = document.querySelectorAll('.welcome-to');
    const iconosIntro = document.querySelectorAll('.iconos-intro');
    const boxLink = document.querySelectorAll('.box-link');

    const boxLinkText = document.querySelector('.box-link .text');
    const link = "www.Juliasuarez.com";

    const retrasoInicial = 2000;
    const retrasoInicial2 = 1000;
    const retrasoInicial3 = 2300;

    // <-- declaración añadida para evitar "allSpans is not defined"
    const allSpans = [...welcomeSpan, ...logoSpan, ...iconosIntro, ...boxLink];

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

    // efecto de escritura en el link
    function textTypingEffect(element, link, i = 0) {
        if (i === 0) {
            element.textContent = "";
        }
        element.textContent += link[i];
        // If we reached the end of the string
        if (i === link.length - 1) {
            return;
        }
        setTimeout(() => textTypingEffect(element, link, i + 1), 80);
    }

    setTimeout(() => {
        textTypingEffect(boxLinkText, link);
    }, retrasoInicial3);

    // ⏱️ se va todo intro
    setTimeout(() => {
        allSpans.forEach((el, idx) => {
            setTimeout(() => {
                el.classList.remove('active');
                // el.classList.add('fade'); // si quieres animación
            }, 5000);
        });
    }, 4000);

    // ⏱️ fadeout del contenedor
    setTimeout(() => {
        intro.classList.add('fadeout');
    }, 5300);
}
