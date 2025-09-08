// Listas de imágenes
const listaCabezas = [
  "../assets/img/Sabrina_cabeza_1.png",
  "../assets/img/Sabrina_cabeza_2.jpg",
  "../assets/img/Sabrina_cabeza_3.png",
  "../assets/img/Sabrina_cabeza_4.png",
  "../assets/img/Sabrina_cabeza_5.png",
];
const listaTroncos = [
 "../assets/img/Sabrina_torso_1.png",
  "../assets/img/Sabrina_torso_2.jpg",
  "../assets/img/Sabrina_torso_3.png",
  "../assets/img/Sabrina_torso_4.png",
  "../assets/img/Sabrina_torso_5.png",
];
const listaPatas = [
  "../assets/img/Sabrina_piernas_1.png",
  "../assets/img/Sabrina_piernas_2.jpg",
  "../assets/img/Sabrina_piernas_3.png",
  "../assets/img/Sabrina_piernas_4.png",
  "../assets/img/Sabrina_piernas_5.png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
