
//Variables

const playerName = document.querySelector('#player-name-input');
const goButton = document.querySelector('#go-btn');
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

const avatarList = [
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
const avatarTable = document.querySelector('.avatar-table');
const tdAvatar = document.getElementsByTagName('td');
const allButton = document.getElementById('filter-all');
const filterLeft = document.querySelector('#filter-l');
const filterRight = document.querySelector('#filter-r');
const avatarShow = document.querySelector('.avatar-show-static');
const buttonShot = document.getElementById('shot');

console.log(tdAvatar);


//Event Listeners




//Funciones

function playerNameSet(name){
  while(name == "" || name == null){
    name = playerName;
  }
  document.getElementById("player-name").innerHTML = `Player 1: ${name}`;

  avatarTable.innerHTML = `
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

  // Para revisión interna de datos
  for(let jugador of avatarList){
    console.log(jugador.nombre);
  }

}



//Botones para filtrar resultados

//Ver todos


allButton.addEventListener('click', () =>{
  avatarTable.innerHTML = `
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


filterLeft.addEventListener('click', ()=>{
  let onlyLeft = avatarList.filter(avatar => avatar.perfil.includes("IZQ"));
  
  avatarTable.innerHTML = `
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

filterRight.addEventListener('click', ()=>{
  let onlyRight = avatarList.filter(avatar => avatar.perfil.includes("DER"));

  avatarTable.innerHTML = `
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

avatarTable.addEventListener('mouseover', showAvatar);
avatarTable.addEventListener('mouseout', resetAvatar);
avatarTable.addEventListener('click', chooseAvatar);

function chooseAvatar(e){
  e.preventDefault();
  
  let avatarName = e.target.innerText;
  
  for(let avatar of avatarList){
    let avatarData = avatar.nombre;
    if(avatarName == avatarData){
      console.log(`${avatarName} - ${avatarData}`);

      let avatarPlaceholder = avatar.nombreYClub()
      document.getElementById("avatar-name").innerHTML = avatarPlaceholder;

      break;
    }
  }
  selectScreen.remove();
}

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


const goal = document.querySelector('.goal-table');
console.log(goal);
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
