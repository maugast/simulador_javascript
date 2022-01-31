
//Variables

const playerName = document.querySelector('#player-name-input');
const goButton = document.querySelector('#btn-go');
const nameForm = document.querySelector('.name-form-container');
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
const allButton = document.getElementById('filter-all');
const filterLeft = document.querySelector('#filter-l');
const filterRight = document.querySelector('#filter-r');
const avatarShow = document.querySelector('.avatar-show-static');
const buttonShot = document.getElementById('shot');
const resetScoreButton = document.querySelector('#reset-score-button');
const goal = document.querySelector('.goal-table');
let getDirection;
let setDirection;
let score = document.querySelector('#score-box');
let points = getScore();
let popUp = document.querySelector('.popup');


//Event Listeners

goButton.addEventListener('click',(e)=>{
  e.preventDefault();
  if(playerName.value == ''){
    playerName.classList.add('alert-form');
    console.log('Faltan datos');
  }
  else{
    document.querySelector("#player-name").innerHTML = `Player 1: ${playerName.value}`;
    let main = document.querySelector('#main-container');
    main.removeChild(nameForm);
    avatarListSet();
  }
});


allButton.addEventListener('click', () =>{
  let tBody = document.querySelector('tbody');
  avatarTable.removeChild(tBody);
  avatarListSet();
});


filterLeft.addEventListener('click', ()=>{
  let tBody = document.querySelector('tbody');
  tBody.innerHTML ='';
  let onlyLeft = avatarList.filter(avatar => avatar.perfil.includes("IZQ"));
  for(let avatar of onlyLeft){
    let tRow = document.createElement('tr');
    let tD = document.createElement('td');
    tD.innerHTML = avatar.nombre;
    tBody.appendChild(tRow);
    tRow.appendChild(tD);
    console.log(avatar.nombre);

    switch(avatar.nombre){
      case 'Lionel Messi':
        tD.setAttribute('class','izq');
        tD.classList.add('messi');
        break;

      case 'Mohamed Salah':
        tD.setAttribute('class','izq');
        tD.classList.add('salah');
        break;
    
      case 'Ángel Di María':
        tD.setAttribute('class','izq');
        tD.classList.add('dimaria');
        break;
      
      case 'Gareth Bale':
        tD.setAttribute('class','izq');
        tD.classList.add('bale');
        break;

      case 'Antoine Griezmann':
        tD.setAttribute('class','izq');
        tD.classList.add('griezmann');
        break;
      
      default:
        console.log('No es posible ese resultado');
        break;
    }
  }
  avatarTable.appendChild(tBody);
});


filterRight.addEventListener('click', ()=>{
  let tBody = document.querySelector('tbody');
  tBody.innerHTML ='';
  let onlyRight = avatarList.filter(avatar => avatar.perfil.includes("DER"));
  for(let avatar of onlyRight){
    let tRow = document.createElement('tr');
    let tD = document.createElement('td');
    tD.innerHTML = avatar.nombre;
    tBody.appendChild(tRow);
    tRow.appendChild(tD);
    console.log(avatar.nombre);

    switch(avatar.nombre){

      case 'Cristiano Ronaldo':
        tD.setAttribute('class','der');
        tD.classList.add('cronaldo');
        break;

      case 'Robert Lewandowski':
        tD.setAttribute('class','der');
        tD.classList.add('lewandowski');
        break;
    
      case 'Kylian Mbappe':
        tD.setAttribute('class','der');
        tD.classList.add('mbappe');
        break;
      
      case 'Karim Benzema':
        tD.setAttribute('class','der');
        tD.classList.add('benzema');
        break;

      case 'Neymar':
        tD.setAttribute('class','der');
        tD.classList.add('neymar');
        break;
      
      default:
        console.log('No es posible ese resultado');
        break;
    }
  }
  avatarTable.appendChild(tBody);
});

avatarTable.addEventListener('mouseover', showAvatar);
avatarTable.addEventListener('mouseout', resetAvatar);
avatarTable.addEventListener('click', chooseAvatar);

goal.addEventListener('click',(e)=>{
  e.preventDefault();
  setDirection = true;

  console.log(`valor de setDirection: ${setDirection}`);
  console.log(`valor de e: ${e.target}`);

  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }
  console.log(`valor de getDirection: ${getDirection}`);
});


buttonShot.addEventListener('click', (e)=>{
  e.preventDefault();

  if(setDirection == true){
    console.log(`valor de setDirection: ${setDirection}`);
    if(getDirection >= 5){
      getDirection - Math.floor(Math.random() * 10)
      console.log(getDirection);

      let popUpNotification = document.querySelector('#popup-notification');
      popUp.setAttribute('class','popup-animated');
      popUpNotification.innerHTML = ` <div style="margin-top: -100px">
                                        <span class="close-button">x</span>
                                        <p>GOOOLL!!!</p>
                                      </div>`;

      points+=10;
      score.innerHTML = `${points}`;

      setScore(points);

      let closeButton = document.querySelector('.close-button');
      closeButton.addEventListener('click',()=>{
      popUp.removeAttribute('class','popup-animated');
      popUp.setAttribute('class','popup');

      });

      console.log(points);
    }
    else{
      let popUpNotification = document.querySelector('#popup-notification');
      popUp.setAttribute('class','popup-animated');
      popUpNotification.innerHTML = ` <div style="margin-top: -100px">
                                        <span class="close-button">x</span>
                                        <p>ATAJÓ EL ARQUERO!!</p>
                                      </div>`;

      let closeButton = document.querySelector('.close-button');
      closeButton.addEventListener('click',()=>{
      popUp.removeAttribute('class','popup-animated');
      popUp.setAttribute('class','popup');
                                
      });   
    }
  }
  else{
    let popUpNotification = document.querySelector('#popup-notification');
    popUp.setAttribute('class','popup-animated');
    popUpNotification.innerHTML = ` <div style="margin-top: -100px">
                                        <span class="close-button">x</span>
                                        <p style="font-size: 1.5rem">Por favor seleccioná la dirección del disparo</p>
                                    </div>`;

    let closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click',()=>{
    popUp.removeAttribute('class','popup-animated');
    popUp.setAttribute('class','popup');
                                                              
    }); 

    setDirection = false;
    console.log(`valor de setDirection: ${setDirection}`);
  }
  setDirection = false;
}
);



resetScoreButton.addEventListener('click',()=>{
  localStorage.clear();
  points = 0;
  score.innerHTML = `${points}`;

});


//Funciones

function avatarListSet(){
  let tBody = document.createElement('tbody');
  avatarList.forEach(avatar => {
	  let tRow = document.createElement('tr');
	  let tD = document.createElement('td');
	  tD.innerText = avatar.nombre;
	  tRow.appendChild(tD);
	  tBody.appendChild(tRow);

    console.log(avatar.nombre);

    switch(avatar.nombre){
      case 'Lionel Messi':
        tD.setAttribute('class','izq');
        tD.classList.add('messi');
        break;

      case 'Cristiano Ronaldo':
        tD.setAttribute('class','der');
        tD.classList.add('cronaldo');
        break;

      case 'Robert Lewandowski':
        tD.setAttribute('class','der');
        tD.classList.add('lewandowski');
        break;
      
      case 'Mohamed Salah':
        tD.setAttribute('class','izq');
        tD.classList.add('salah');
        break;

      case 'Kylian Mbappe':
        tD.setAttribute('class','der');
        tD.classList.add('mbappe');
        break;
    
      case 'Ángel Di María':
        tD.setAttribute('class','izq');
        tD.classList.add('dimaria');
        break;
      
      case 'Karim Benzema':
        tD.setAttribute('class','der');
        tD.classList.add('benzema');
        break;

      case 'Gareth Bale':
        tD.setAttribute('class','izq');
        tD.classList.add('bale');
        break;

      case 'Neymar':
        tD.setAttribute('class','der');
        tD.classList.add('neymar');
        break;

      case 'Antoine Griezmann':
        tD.setAttribute('class','izq');
        tD.classList.add('griezmann');
        break;
      
      default:
        console.log('No es posible ese resultado');
        break;
    }

});

avatarTable.appendChild(tBody);
}


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
  setScore(points);
  score.innerHTML = `${points}`;
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

function setScore(pts){
  localStorage.setItem('score', pts);
}

function getScore(){
  let record = localStorage.getItem('score');
  record = Number(record);
  return record;

}