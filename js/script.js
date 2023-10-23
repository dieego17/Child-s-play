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

let lista = document.querySelector(".configname__select");

// Para resetear las animaciones
configname.addEventListener("animationend", () => {
  configname.classList.remove("configerror");
});
configimage.addEventListener("animationend", () => {
  configimage.classList.remove("configerror");
});


//cargar nombres en el select
const loadNames = () =>{

  for(let i = 0; i<names.length; i++){
    let option = document.createElement("OPTION");
    option.textContent = names[i];
    option.className = "configname__option";
    option.name = names[i];
    lista.appendChild(option);
  } 
}
document.addEventListener("DOMContentLoaded", loadNames);

//Evento poner nombre
const changeName = (event)=>{
  let element = event.target;
  console.log("buenasss")
  configname__input.textContent = data__name.value;
}
configname__button.addEventListener("click", changeName)

let listaAva = document.querySelector(".configimage__containerimages")

//cargar nombres en el select
const loadAvatar = () =>{

  for(let i = 0; i<8; i++){
    let avatarAle = Math.floor(Math.random()*configavatars.length);
      let img = document.createElement("IMG");
      img.src = "./assets/images/configavatars/"+configavatars[avatarAle]+".png";
      img.className = "configimage__img";
      listaAva.appendChild(img)
  } 
}
document.addEventListener("DOMContentLoaded", loadAvatar);



//Evento para cargar las animaciones
const changeAvatar = (event)=>{

}
configimage.addEventListener("click", changeAvatar);