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
const configname_select=configname.querySelector(".configname__select");

// Para las imagenes
const configimage = document.getElementById("configimage");
const configimage__container = configimage.querySelector(".configimage__containerimages");
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
let imgJuego;
let couples = [];
let seleccion=[];
// Variables
//-------------------------------------Funciones-------------------------------------
const showName=(nombre)=>{
  if (data.classList.contains("displaynone")) {
    data.classList.remove("displaynone");
  }
  data__titlename.classList.remove("displaynone");
  data__name.textContent=nombre;
}
const showAvatar=(src)=>{
  if (data.classList.contains("displaynone")) {
    data.classList.remove("displaynone");
  }
  data__img.classList.remove("displaynone");
  data__img.setAttribute("src",src);
}
const loadNames=()=>{
  let namesFrag = document.createDocumentFragment();
  let name;
  names.forEach(element => {
    name=document.createElement("option");
    name.setAttribute("name",element);
    name.textContent=element;
    name.classList.add("configname__option");
    namesFrag.appendChild(name);
  });
  configname_select.appendChild(namesFrag);
}
const addName = ()=>{
  let name = document.createElement("option");
  name.setAttribute("name",configname__input.value);
  name.textContent=configname__input.value;
  name.classList.add("configname__option");
  name.setAttribute("selected",true);
  configname_select.insertBefore(name,configname_select.firstElementChild);
  showName(configname__input.value);
}
const generateAvatars=()=>{
  let avatares=[];
  let posAl;
  let image;
  let avataresFrag = document.createDocumentFragment();
  for (let i = 0; i < 8; i++) {
    image = document.createElement("img");
    image.classList.add("configimage__img");
    do {
      posAl=Math.floor(Math.random()*configavatars.length);
    } while (avatares.includes(configavatars[posAl]));
    avatares.push(configavatars[posAl]);
    image.setAttribute("src",`./assets/images/configavatars/${configavatars[posAl]}.png`);
    avataresFrag.appendChild(image);
  }
  configimage__container.appendChild(avataresFrag);
}
const addConfGame=(array,url,estilo,parent)=>{
  let fragment = document.createDocumentFragment();
  let elemento;
  array.forEach(element=>{
    elemento=document.createElement("img");
    elemento.classList.add(estilo);
    elemento.setAttribute("src",`${url}/${element}.png`);
    fragment.appendChild(elemento);
  })
  parent.appendChild(fragment);
}
const checkConf=()=>{
  let valid = true;
  if(data__titlename.classList.contains("displaynone")){
    configname.classList.add("configerror")
    valid=false;
  }
  if(data__img.classList.contains("displaynone")){
    configimage.classList.add("configerror")
    valid=false;
  }
  return valid;
}
const generateCouples=(array,url)=>{
  let parejas = array;
  let posAl;
  array.forEach(element=>{
    parejas.push(element);
  })
  while (parejas.length>0) {
    posAl=Math.floor(Math.random()*parejas.length);
    couples.push(`${url}/${parejas.splice(posAl,1)[0]}.png`);
  }
  // document.querySelectorAll(".game__img").forEach(element=>{
  //   element.setAttribute("src",couples[element.getAttribute("alt")])
  // })
}
const replaceImages = (images)=>{
  images[seleccion[0]].setAttribute("src","./assets/images/estrella.png");
  images[seleccion[1]].setAttribute("src","./assets/images/estrella.png");
}
const checkCouple=()=>{
  let images = game__grid.children;
  console.log(images[seleccion[0]]);
  window.setTimeout(() => {
    if (!(couples[seleccion[0]]===couples[seleccion[1]])) {
      replaceImages(images);
    }
    seleccion=[];
  }, 1000);
}
const checkFinish=()=>{
  let finish = true;
  let images  = game__grid.children;
  for (const iterator of images) {
    if (iterator.getAttribute("src")==="./assets/images/estrella.png") {
      finish=false;
    }
  }
  return finish;
}
//-------------------------------------/Funciones/-----------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

//--------------------------------------eventos----------------------------------------
document.addEventListener("DOMContentLoaded",()=>{
  loadNames();
  generateAvatars();
  addConfGame(operators,"./assets/images/operators","configgames__imgoperators",configgames__container.children[0]);
  addConfGame(foods,"./assets/images/foods","configgames__imgfoods",configgames__container.children[1]);
});
configname_select.addEventListener("change",()=>{
  showName(configname_select.value);
});
configname__button.addEventListener("click",addName);
configimage__container.addEventListener("click",(event)=>{
  if (event.target.tagName==="IMG") {
    showAvatar(event.target.getAttribute("src"));
  }
})
configgames__container.addEventListener("click",(event)=>{
  let parent = event.target.parentElement;
  if(parent.getAttribute("id")==="configgames__operations"||parent.getAttribute("id")==="configgames__foods"){
    if(checkConf()){
      config.classList.add("config__hide");
      game.classList.add("game__show");
      imgJuego=parent.getAttribute("id");
      if(parent.getAttribute("id")==="configgames__operations"){
        generateCouples(operators,"./assets/images/operators");
      } else {
        generateCouples(foods,"./assets/images/foods");
      }
    };
  }
})
game__grid.addEventListener("click",(event)=>{
  if (event.target.tagName==="IMG") {
    if (seleccion.length<2) {
      if(!seleccion.includes(event.target.getAttribute("alt"))){
        seleccion.push(event.target.getAttribute("alt"));
        event.target.setAttribute("src",couples[event.target.getAttribute("alt")]);
        if (seleccion.length===2) {
          checkCouple();
        }
      }
    }
    if (checkFinish()) {
      finishgame.classList.add("finishgame__show");
    }
  }
})
document.getElementById("finishgame__button").addEventListener("click",()=>{
  location.reload();
})
// Para resetear las animaciones
configname.addEventListener("animationend", () => {
  configname.classList.remove("configerror");
});
configimage.addEventListener("animationend", () => {
  configimage.classList.remove("configerror");
});


