export function showcase() {
    // Seleccionamos los contenedores principales
    const seleccionar = document.querySelector('.box-seleccionar');
    const mostrar = document.querySelector('.box-mostrar-seleccion');

    // Mapeamos los nombres para relacionarlos fácilmente
    const secciones = ['proyectos', 'certificates', 'tech-stack'];

    // Añadimos evento de clic a cada uno de los elementos del selector
    secciones.forEach(nombre => {
    const boton = seleccionar.querySelector(`.${nombre}`);
    const mostrarElemento = mostrar.querySelector(`.${nombre}-mostrar`);

    boton.addEventListener('click', () => {
        // Quitar clase "activa" de todos los botones y secciones
        secciones.forEach(n => {
        seleccionar.querySelector(`.${n}`).classList.remove('activa');
        mostrar.querySelector(`.${n}-mostrar`).classList.remove('activa');
        });

        // Añadir clase "activa" al botón y sección seleccionada
        boton.classList.add('activa');
        mostrarElemento.classList.add('activa');
    });
    });

}