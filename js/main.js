
//Solicita el nombre del jugador

let playerName = prompt('!Bienvenido!, ingrese su nombre para continuar');
console.log(playerName);


//Elije jugador

//Se crean objetos a partir de la clase Avatar
const avatar1 = new Avatar(1,"Lionel Messi","Paris SG","IZQ", 6,9);
const avatar2 = new Avatar(2,"Cristiano Ronaldo","Manchester Utd","DER", 7,8);
const avatar3 = new Avatar(3,"Robert Lewandowski","Bayern Munich","DER", 7,7);
const avatar4 = new Avatar(4,"Mohamed Salah","Liverpool","IZQ", 7,6);
const avatar5 = new Avatar(5,"Kylian Mbappe","Paris SG","DER", 8,7);
const avatar6 = new Avatar(6,"Ángel Di María","Paris SG","IZQ", 5,8);
const avatar7 = new Avatar(7,"Karim Benzema","Real Madrid","DER", 7,6);
const avatar8 = new Avatar(8,"Gareth Bale","Real Madrid","IZQ", 6,8);
const avatar9 = new Avatar(9,"Neymar","Paris SG","DER", 6,7);
const avatar10 = new Avatar(10,"Antoine Griezmann","Atlético de Madrid","IZQ", 7,5);


//Array de Objetos
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

const selectScreen = document.querySelector('.select-screen-container');
const tablaAvatars = document.querySelector('.tabla-avatars');
const tablaBody = document.getElementById('tabla-body');


//Pinta el nombre ingreado por prompt() en la interfaz
function playerNameSet(name){
  while(name == "" || name == null){
    name = prompt('Por favor ingrese su nombre para continuar');
  }
  document.getElementById("player-name").innerHTML = `Player 1: ${name}`;

  tablaAvatars.innerHTML = `
          <tbody>
              <tr>
                  <td class="izq messi">${avatar1.nombre}</td>
                  <td class="der cronaldo">${avatar2.nombre}</td>
              </tr>
              <tr>
                  <td class="der lewandowski">${avatar3.nombre}</td>
                  <td class="izq salah">${avatar4.nombre}</td>
              </tr>
 
              <tr>
                  <td class="der mbappe">${avatar5.nombre}</td>
                  <td class="izq dimaria">${avatar6.nombre}</td>
              </tr>
              <tr>
                  <td class="der benzema">${avatar7.nombre}</td>
                  <td class="izq bale">${avatar8.nombre}</td>
              </tr>
              <tr>
                  <td class="der neymar">${avatar9.nombre}</td>
                  <td class="izq griezmann">${avatar10.nombre}</td>
              </tr>
          </tbody>
              `;

}

playerNameSet(playerName);

//Botones para filtrar resultados

//Ver todos
const allButton = document.getElementById('filter-all');

allButton.addEventListener('click', () =>{
  tablaAvatars.innerHTML = `
          <tbody>
              <tr>
                  <td class="izq messi">${avatar1.nombre}</td>
                  <td class="der cronaldo">${avatar2.nombre}</td>
              </tr>
              <tr>
                  <td class="der lewandowski">${avatar3.nombre}</td>
                  <td class="izq salah">${avatar4.nombre}</td>
              </tr>
 
              <tr>
                  <td class="der mbappe">${avatar5.nombre}</td>
                  <td class="izq dimaria">${avatar6.nombre}</td>
              </tr>
              <tr>
                  <td class="der benzema">${avatar7.nombre}</td>
                  <td class="izq bale">${avatar8.nombre}</td>
              </tr>
              <tr>
                  <td class="der neymar">${avatar9.nombre}</td>
                  <td class="izq griezmann">${avatar10.nombre}</td>
              </tr>
          </tbody>
              `;

});


//Filtrar Perfiles Izquierdos
const filterLeft = document.querySelector('#filter-l');

filterLeft.addEventListener('click', ()=>{
  let onlyLeft = listaAvatares.filter(avatar => avatar.perfil.includes("IZQ"));
  
  tablaAvatars.innerHTML = `
          <tbody>
              <tr>
                  <td class="izq messi">${avatar1.nombre}</td>
              </tr>
              <tr>
                  <td class="izq salah">${avatar4.nombre}</td>
              </tr>
 
              <tr>
                  <td class="izq dimaria">${avatar6.nombre}</td>
              </tr>
              <tr>
                  <td class="izq bale">${avatar8.nombre}</td>
              </tr>
              <tr>
                  <td class="izq griezmann">${avatar10.nombre}</td>
              </tr>
          </tbody>
              `;  
  console.log(onlyLeft)
});


//Filtrar Perfiles Derechos
const filterRight = document.querySelector('#filter-r');

filterRight.addEventListener('click', ()=>{
  let onlyRight = listaAvatares.filter(avatar => avatar.perfil.includes("DER"));

  tablaAvatars.innerHTML = `
          <tbody>
              <tr>
                  <td class="der cronaldo">${avatar2.nombre}</td>
              </tr>
              <tr>
                  <td class="der lewandowski">${avatar3.nombre}</td>
              </tr>
 
              <tr>
                  <td class="der mbappe">${avatar5.nombre}</td>
              </tr>
              <tr>
                  <td class="der benzema">${avatar7.nombre}</td>
              </tr>
              <tr>
                  <td class="der neymar">${avatar9.nombre}</td>
              </tr>
          </tbody>
              `;

  console.log(onlyRight);
});

tablaAvatars.addEventListener('mouseover', showAvatar);
tablaAvatars.addEventListener('mouseout', resetAvatar);
tablaAvatars.addEventListener('click', chooseAvatar);

function chooseAvatar(e){
  e.preventDefault();
  
  let avatarName = e.target.innerText;
  
  for(let jugador of listaAvatares){
    let avatarData = jugador.nombre;
    if(avatarName == avatarData){
      console.log(`${avatarName} - ${avatarData}`);

      let avatarPlaceholder = jugador.nombreYClub()
      document.getElementById("avatar-name").innerHTML = avatarPlaceholder;

      break;
    }
  }
  selectScreen.remove();
}

let avatarShow = document.querySelector('.avatar-show-static');

function showAvatar(e){
  e.preventDefault();
  if(e.target.classList.contains('izq') || e.target.classList.contains('der')){
    console.log('izq o der');

    if(e.target.classList.contains('messi')){
      avatarShow.setAttribute('class','avatar-show-animated-messi');
    }
    else if(e.target.classList.contains('benzema')){
      avatarShow.setAttribute('class','avatar-show-animated-benzema');
    }
    else if(e.target.classList.contains('cronaldo')){
      avatarShow.setAttribute('class','avatar-show-animated-cronaldo');
    }
    else if(e.target.classList.contains('bale')){
      avatarShow.setAttribute('class','avatar-show-animated-bale');
    }
    else if(e.target.classList.contains('dimaria')){
      avatarShow.setAttribute('class','avatar-show-animated-dimaria');
    }
    else if(e.target.classList.contains('griezmann')){
      avatarShow.setAttribute('class','avatar-show-animated-griezmann');
    }
    else if(e.target.classList.contains('lewandowski')){
      avatarShow.setAttribute('class','avatar-show-animated-lewandowski');
    }
    else if(e.target.classList.contains('mbappe')){
      avatarShow.setAttribute('class','avatar-show-animated-mbappe');
    }
    else if(e.target.classList.contains('neymar')){
      avatarShow.setAttribute('class','avatar-show-animated-neymar');
    }
    else if(e.target.classList.contains('salah')){
      avatarShow.setAttribute('class','avatar-show-animated-salah');
    }
  }
}


function resetAvatar(e){
  e.preventDefault();
  if(e.target.classList.contains('izq') || e.target.classList.contains('der')){
    console.log('izq o der');
    avatarShow.setAttribute('class','avatar-show-static');
  }
}


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


const arco = document.querySelector('.tabla-arco');
console.log(arco);
let getDirection;


//Interface a revisar para simplificar su codificación



ul.addEventListener('click', ()=>{
  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(getDirection);
  console.log(arco);
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
