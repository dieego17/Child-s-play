// Datos
const operators = [
  "suma",
  "resta",
  "producto",
  "division",
  "igual",
  "porcentaje",
];

const gameavatars = [
  "avatar1",
  "avatar2",
  "avatar3",
  "avatar4",
  "avatar5",
  "avatar6",
];

const foods = ["chicken", "burger", "hot-dog", "ice-cream", "pizza", "potatos"];

const flowers = ["daisy", "iris", "lavender", "rose", "sakura", "sunflower"];

const names = [
  "María",
  "Miguel",
  "Cristina",
  "Gloria",
  "Lucía",
  "Martina",
  "Sofía",
  "Paula",
  "Daniela",
  "Valeria",
  "Alba",
  "Julia",
  "Noa",
  "Hugo",
  "Daniel",
  "Martín",
  "Pablo",
  "Alejandro",
  "Lucas",
  "Álvaro",
  "Adrián",
  "Mateo",
  "David",
];

const configavatars = [
  "astronauta",
  "boy1",
  "boy2",
  "boy3",
  "boy4",
  "boy5",
  "farmer",
  "giraffe",
  "girl1",
  "girl3",
  "girl4",
  "girl5",
  "gril2",
  "happy1",
  "happy2",
  "officer",
  "pig",
  "vampire",
];
// -----------------------------------------------------------------------------------

// Nodos

// Header
const data = document.getElementById("data");
const data__name = document.getElementById("data__name");
const data__titlename = document.getElementById("data__titlename");
const data__img = document.getElementById("data__img");
// Config
const config = document.getElementById("config");

// Para los nombres
const configname = document.getElementById("configname");
const configname__input = document.getElementById("configname__input");
const configname__button = document.getElementById("configname__button");

// Para las imagenes
const configimage = document.getElementById("configimage");

// Para la configuración de las parejas
const configgames__couples = document.getElementById("configgames__foods");
const configgames__container = document.getElementById(
  "configgames__container"
);

// Juego
const game = document.getElementById("game");
const game__grid = document.getElementById("game__grid");
const finishgame = document.getElementById("finishgame");

// -----------------------------------------------------------------------------------
// Variables



// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------



// Para resetear las animaciones
configname.addEventListener("animationend", () => {
  configname.classList.remove("configerror");
});
configimage.addEventListener("animationend", () => {
  configimage.classList.remove("configerror");
});


