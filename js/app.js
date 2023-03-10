// Obtener los botones por su ID
const btnRojo = document.getElementById("rojo");
const btnAzul = document.getElementById("azul");
const btnVerde = document.getElementById("verde");
const btnReset = document.getElementById("reset");

// Asignar eventos de clic a cada botón
btnRojo.addEventListener("click", () => cambiarColores("rojo"));
btnAzul.addEventListener("click", () => cambiarColores("azul"));
btnVerde.addEventListener("click", () => cambiarColores("verde"));
btnReset.addEventListener("click", () => cambiarColores("reset"));

// Función que cambia los colores de la página
function cambiarColores(color) {
  const body = document.body;
  const header = document.querySelector("header");
  
  
  switch (color) {
    case "rojo":
      body.style.backgroundColor = "red";
      header.style.backgroundColor = "darkred";
      
      break;
    case "azul":
      body.style.backgroundColor = "blue";
      header.style.backgroundColor = "darkblue";
      
      break;
    case "verde":
      body.style.backgroundColor = "green";
      header.style.backgroundColor = "darkgreen";
      
      break;
    case "reset":
      body.style.backgroundColor = "grey";
      header.style.backgroundColor = "white";
      
      break;
    default:
      break;
  }
}

//2

function filtrarProyectos() {
  var tecnologiaSeleccionada = document.getElementById("modulo").value;
  var proyectos = document.getElementById("contenedor").children;
  for (var i = 0; i < proyectos.length; i++) {
    var proyecto = proyectos[i];
    var tecnologias = proyecto.getAttribute("data-tecnologia");
    if (tecnologiaSeleccionada === "all" || tecnologias.indexOf(tecnologiaSeleccionada) !== -1) {
      proyecto.style.display = "block";
    } else {
      proyecto.style.display = "none";
    }
  }
}