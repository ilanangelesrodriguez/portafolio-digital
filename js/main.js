let projects = document.querySelector(".projects");
class Carta {
    constructor(nombre, descripcion, rutaImagen, link) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.rutaImagen = rutaImagen;
      this.link = link;
    }
  
    obtenerHTML() {
      return `<div class="projects__card">
        <div class="projects__card-img"><img src="${this.rutaImagen}" alt="${this.nombre}" /></div>
            <div class="projects__card-info">
                <p class="text-title">${this.nombre}</p>
                <p class="text-body">${this.descripcion}</p>
            </div>
            <div class="projects__card-footer">
                <span class="text-title"></span>
                <button class="cta">
                    <a target="_blank" href=${this.link}>Prueba</a>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </div>`;
    }
  }

  // Crear instancias de Carta
const tramites = new Carta(
    "Página para tramites",
    "Desarrollado con Bootstrap y Sass. Realice maquetación de página para mi escuela.",
    "./assets/EPISItramites.png", 
    "https://eapisitramites.vercel.app/"
  );
  
  const tienda = new Carta(
    "Tienda Online",
    "Desarrollado con HTML, Sass y JavaScript. Permite accesibilidad al negocio.",
    "./assets/tienda.png", 
    "https://novedadesmarita.vercel.app/"
  );

  const quiz_flag = new Carta(
    "Quiz Flag",
    "Desarrollado con HTML, CSS y JavaScript. Fue mi primer proyecto manipulando el DOM.",
    "./assets/quizFlag.png", 
    "https://ilanangelesrodriguez.github.io/quizFlag/"
  );

// Obtener el HTML de las cartas
const htmlCarta1 = tramites.obtenerHTML();
const htmlCarta2 = tienda.obtenerHTML();
const htmlCarta3 = quiz_flag.obtenerHTML();

// Agregar el HTML al documento
document.querySelector(".projects").innerHTML += htmlCarta1 + htmlCarta2 + htmlCarta3;


