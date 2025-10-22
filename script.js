function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));
  
    const seccionActiva = document.getElementById(id);
    seccionActiva.classList.add('activa');
  }