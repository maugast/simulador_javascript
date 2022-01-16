
//Solicita el nombre del jugador

let playerName = prompt('!Bienvenido!, ingrese su nombre para continuar');
console.log(playerName);


//Lo pinta en la interfaz - DESAFÍO CLASE 03: CREAR UN ALGORITMO UTILIZANDO UN CICLO
function playerNameSet(name){
  while(name == "" || name == null){
    name = prompt('Por favor ingrese su nombre para continuar');
  }
  document.getElementById("player-name").innerHTML = `Player 1: ${name}`;
}

playerNameSet(playerName);



//Elije jugador

const avatar1 = new Avatar("Lionel Messi","Paris SG","IZQ", 6,9);
const avatar2 = new Avatar("Cristiano Ronaldo","Manchester Utd","DER", 7,8);
const avatar3 = new Avatar("Robert Lewandowski","Bayern Munich","DER", 7,7);
const avatar4 = new Avatar("Mohamed Salah","Liverpool","IZQ", 7,6);
const avatar5 = new Avatar("Kylian Mbappe","Paris SG","DER", 8,7);
const avatar6 = new Avatar("Ángel Di María","Paris SG","IZQ", 5,8);
const avatar7 = new Avatar("Karim Benzema","Real Madrid","DER", 7,6);
const avatar8 = new Avatar("Gareth Bale","Real Madrid","IZQ", 6,8);
const avatar9 = new Avatar("Neymar","Paris SG","DER", 6,7);
const avatar10 = new Avatar("Antoine Griezmann","Atlético de Madrid","IZQ", 7,5);


const listaAvatares = [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5,
        avatar6,
        avatar7,
        avatar8,
        avatar9,
        avatar10
];


for(let jugador of listaAvatares){
  console.log(jugador);
}


//Botones para filtrar resultados


const tablaAvatars = document.querySelector('.tabla-avatars');

//Ver todos
const allButton = document.getElementById('filter-all');

allButton.addEventListener('click', ()=>{
  
  console.log(listaAvatares)
});

//Filtrar Perfiles Izquierdos
const filterLeft = document.querySelector('#filter-l');

filterLeft.addEventListener('click', ()=>{
  let onlyLeft = listaAvatares.filter(avatar => avatar.perfil.includes("IZQ"));

  document.getElementsByClassName('der').style.display ='none';
    console.log(onlyLeft)
});




//Filtrar Perfiles Derechos
const filterRight = document.querySelector('#filter-r');

filterRight.addEventListener('click', ()=>{
  let onlyRight = listaAvatares.filter(avatar => avatar.perfil.includes("DER"));

  let onlyLeft = document.getElementsByClassName('izq').children;

  console.log(onlyLeft);
  console.log(onlyRight);
});




//Elije la direccion del disparo

let ul = document.getElementById('ul');
let uc = document.getElementById('uc');
let ur = document.getElementById('ur');

let ml = document.getElementById('ml');
let mc = document.getElementById('mc');
let mr = document.getElementById('mr');

let dl = document.getElementById('dl');
let dc = document.getElementById('dc');
let dr = document.getElementById('dr');



let getDirection;

ul.addEventListener('click', ()=>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

uc.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

ur.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

ml.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

mc.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

mr.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

dl.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

dc.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});

dr.addEventListener('click', () =>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
});



//Dispara
let buttonShot = document.getElementById('shot');

buttonShot.addEventListener('click', ()=>{
  if(getDirection){
    if(getDirection >= 5){
      getDirection - Math.floor(Math.random() * 10)
      console.log(getDirection);
      alert('GOOOOL!!!')
    }
    else(
      alert('ATAJÓ EL ARQUERO!!')
    );
  }
  else{
    alert('Por favor selecciona la dirección del disparo');
  }
  
} );
