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

// 3

const asunto = document.querySelector('#subject');
const correo = document.querySelector('#cc');
const mensaje = document.querySelector('#body');


asunto.addEventListener('blur', () => {
  if (asunto.value.trim() === '') {
    asunto.style.border = '2px solid red';
    let errorText = asunto.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      asunto.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    asunto.style.border = '2px solid green';
    const errorText = asunto.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

correo.addEventListener('blur', () => {
  const ccRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (correo.value.trim() === '' || !ccRegex.test(correo.value.trim())) {
    correo.style.border = '2px solid red';
    let errorText = correo.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      correo.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Debe introducir un correo electrónico válido';
  } else {
    correo.style.border = '2px solid green';
    const errorText = correo.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

mensaje.addEventListener('blur', () => {
  if (mensaje.value.trim() === '') {
    mensaje.style.border = '2px solid red';
    let errorText = mensaje.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      mensaje.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    mensaje.style.border = '';
    const errorText = mensaje.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});