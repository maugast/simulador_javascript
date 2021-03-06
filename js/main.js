
//Variables

const playerName = document.querySelector('#player-name-input');
const nameForm = document.querySelector('.name-form-container');

const avatarList = [];
avatarList.push(new Avatar("Lionel Messi","Paris SG","IZQ", 6,9));
avatarList.push(new Avatar("Cristiano Ronaldo","Manchester Utd","DER", 7,8));
avatarList.push(new Avatar("Mohamed Salah","Liverpool","IZQ", 7,6));
avatarList.push(new Avatar("Robert Lewandowski","Bayern Munich","DER", 7,7));
avatarList.push(new Avatar("Ángel Di María","Paris SG","IZQ", 5,8));
avatarList.push(new Avatar("Kylian Mbappe","Paris SG","DER", 8,7));
avatarList.push(new Avatar("Gareth Bale","Real Madrid","IZQ", 6,8));
avatarList.push(new Avatar("Karim Benzema","Real Madrid","DER", 7,6));
avatarList.push(new Avatar("Antoine Griezmann","Atlético de Madrid","IZQ", 7,5));
avatarList.push(new Avatar("Neymar","Paris SG","DER", 6,7));


const avatarShowAnimation = ['avatar-show-animated-messi',
                              'avatar-show-animated-cronaldo',
                              'avatar-show-animated-salah',
                              'avatar-show-animated-lewandowski',
                              'avatar-show-animated-dimaria',
                              'avatar-show-animated-mbappe',
                              'avatar-show-animated-bale',
                              'avatar-show-animated-benzema',
                              'avatar-show-animated-griezmann',
                              'avatar-show-animated-neymar'
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
let goalCount=0;
let missCount=0;
let popUp = document.querySelector('.popup');
let goalStats = document.querySelector('#stats-box-goals');
let missedStats = document.querySelector('#stats-box-missed');
const URLGET = "https://api.imgflip.com/get_memes"  //API de memes para hacer consumir con AJAX

//Event Listeners
$(document).ready(()=>{
  $('header').css({
    "filter": "blur(4px)",
  });

  $('.goal-container').css({
    "filter": "blur(4px)",
  });

  $('.match-stats-container').css({
    "filter": "blur(4px)",
  });

  $('.avatar-container').css({
    "filter": "blur(4px)",
  });

  $('#shot-container').css({
    "filter": "blur(4px)",
  });

  $('body').prepend(`<div id="blurred-dark-overlay"></div>`);
  $('#blurred-dark-overlay').css({
    "position":"absolute",
    "height":"750px",
    "width":"100%",
    "background-color": "rgba(0, 0, 0, 0.6)",
    "z-index":"1"
  });
  $(".select-screen-container").hide(); //Animaciones encadenadas de jQuery
  $(".name-form-container").hide();
  $(".name-form-container").fadeIn(1000);


});

$('#btn-go').click((e)=>{   

	e.preventDefault();

  	if(playerName.value == ''){
    	playerName.classList.add('alert-form');

  	}
  	else{
    	$("#player-name").append(`<h3>${playerName.value}</h3>`);
    	let main = document.querySelector('#main-container');
    	main.removeChild(nameForm);
    	avatarListSet();
      $(".select-screen-container").fadeIn(1000);  //Animación con jQuery
  	}

});


allButton.addEventListener('click', () =>{ //Vemos el listado completo de Avatares
  let tBody = document.querySelector('tbody');
  avatarTable.removeChild(tBody);
  avatarListSet();
});


filterLeft.addEventListener('click', ()=>{ //Filtramos Avatares por perfil Izquierdo o "Zurdos"
  let tBody = document.querySelector('tbody');
  tBody.innerHTML ='';
  let onlyLeft = avatarList.filter(avatar => avatar.perfil.includes("IZQ"));
  for(let avatar of onlyLeft){
    let tRow = document.createElement('tr');
    let tD = document.createElement('td');
    tD.innerHTML = avatar.nombre;
    tBody.appendChild(tRow);
    tRow.appendChild(tD);
    
    switch(avatar.nombre){
      case 'Lionel Messi':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', 0);
        tD.classList.add('messi');
        break;

      case 'Mohamed Salah':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', 2);
        tD.classList.add('salah');
        break;
    
      case 'Ángel Di María':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', 4);
        tD.classList.add('dimaria');
        break;
      
      case 'Gareth Bale':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', 6);
        tD.classList.add('bale');
        break;

      case 'Antoine Griezmann':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', 8);
        tD.classList.add('griezmann');
        break;
      
      default:
        console.log('No es posible ese resultado');
        break;
    }
  }
  avatarTable.appendChild(tBody);
});




filterRight.addEventListener('click', ()=>{ //Filtramos Avatares por perfil Derecho
  let tBody = document.querySelector('tbody');
  tBody.innerHTML ='';
  let onlyRight = avatarList.filter(avatar => avatar.perfil.includes("DER"));
  for(let avatar of onlyRight){
    let tRow = document.createElement('tr');
    let tD = document.createElement('td');
    tD.innerHTML = avatar.nombre;
    tBody.appendChild(tRow);
    tRow.appendChild(tD);

    switch(avatar.nombre){

      case 'Cristiano Ronaldo':
        tD.setAttribute('class','der');
        tD.setAttribute('id', 1);
        tD.classList.add('cronaldo');
        break;

      case 'Robert Lewandowski':
        tD.setAttribute('class','der');
        tD.setAttribute('id', 3);
        tD.classList.add('lewandowski');
        break;
    
      case 'Kylian Mbappe':
        tD.setAttribute('class','der');
        tD.setAttribute('id', 5);
        tD.classList.add('mbappe');
        break;
      
      case 'Karim Benzema':
        tD.setAttribute('class','der');
        tD.setAttribute('id', 7);
        tD.classList.add('benzema');
        break;

      case 'Neymar':
        tD.setAttribute('class','der');
        tD.setAttribute('id', 9);
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

  getDirection = Math.floor(Math.random() * 10);
  if(getDirection<1){
    getDirection+=1;
  }

  let goalTdArray = Array.from(goal.querySelectorAll('td'));

  for(let td of goalTdArray){
    td.classList.remove('selected');
  }
  
  e.target.classList.add('selected');

});


buttonShot.addEventListener('click', (e)=>{ //Botón para patear al arco
  e.preventDefault();
  if(setDirection == true){
    if(getDirection >= 5){
      getDirection - Math.floor(Math.random() * 10)
      let popUpNotification = document.querySelector('#popup-notification');
      popUp.setAttribute('class','popup-animated');
      popUpNotification.innerHTML = ` <div style="margin-top: -150px">
                                        <span class="close-button">x</span>
                                        <p>GOOOL!!!</p>
                                        <div id="meme-box" class="rounded-circle"></div>
                                      </div>`;
      
          $.get(URLGET,(respuesta, estado) => { //Llamada AJAX
            if(estado === "success"){
              let misDatos = respuesta;
              let random = Math.floor(Math.random() * 100);
              $('#meme-box').css({
                "position":"absolute",
                "left":"40%",
                "width":"150px",
                "height":"150px",
                "background-image":`url('${misDatos.data.memes[random].url}')`,
                "background-size":"cover",
                "background-repeat":"no-repeat",
                "background-position":"center"
              });
                                          
            }
      });
                                                  
      goalCount+=1;
      points+=10;
      score.innerHTML = `${points}`;
      setScore(points);

      let closeButton = document.querySelector('.close-button');
      closeButton.addEventListener('click',()=>{
      popUp.removeAttribute('class','popup-animated');
      popUp.setAttribute('class','popup');

      });

    }
    else{
      let popUpNotification = document.querySelector('#popup-notification');
      popUp.setAttribute('class','popup-animated');
      popUpNotification.innerHTML = ` <div style="margin-top: -150px">
                                        <span class="close-button">x</span>
                                        <p>ATAJÓ EL ARQUERO!!</p>
                                        <div id="meme-box" class="rounded-circle"></div>
                                      </div>`;

          $.get(URLGET,(respuesta, estado) => {  //Llamada AJAX
            if(estado === "success"){
              let misDatos = respuesta;
              let random = Math.floor(Math.random() * 100);
              $('#meme-box').css({
                "position":"absolute",
                "left":"40%",
                "width":"150px",
                "height":"150px",
                "background-image":`url('${misDatos.data.memes[random].url}')`,
                "background-size":"cover",
                "background-repeat":"no-repeat",
                "background-position":"center"
              });
                                                                      
            }
      });

      missCount+=1; 

      let closeButton = document.querySelector('.close-button');
      closeButton.addEventListener('click',()=>{
      popUp.removeAttribute('class','popup-animated');
      popUp.setAttribute('class','popup');
      
      });   
    }
    setStats(goalCount,missCount); //La función recibe los argumentos goalCount y missCount que ayudan a generar un objeto que luego será convertido y retornado como JSON
    
    getStats(setStats(goalCount,missCount)); //Esta función recibe el objeto JSON que retornó setStats y luego de parsearlo a objeto Javascript podemos acceder a sus datos internos y mostrarlos en pantalla.
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
  }
  setDirection = false;

  let goalTdArray = Array.from(goal.querySelectorAll('td'));
  for(let td of goalTdArray){
    td.classList.remove('selected');
  }
  
});


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

    switch(avatar.nombre){
      case 'Lionel Messi':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('messi');
        break;

      case 'Cristiano Ronaldo':
        tD.setAttribute('class','der');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('cronaldo');
        break;

      case 'Robert Lewandowski':
        tD.setAttribute('class','der');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('lewandowski');
        break;
      
      case 'Mohamed Salah':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('salah');
        break;

      case 'Kylian Mbappe':
        tD.setAttribute('class','der');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('mbappe');
        break;
    
      case 'Ángel Di María':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('dimaria');
        break;
      
      case 'Karim Benzema':
        tD.setAttribute('class','der');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('benzema');
        break;

      case 'Gareth Bale':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('bale');
        break;

      case 'Neymar':
        tD.setAttribute('class','der');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
        tD.classList.add('neymar');
        break;

      case 'Antoine Griezmann':
        tD.setAttribute('class','izq');
        tD.setAttribute('id', `${avatarList.indexOf(avatar)}`);
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
      
      let avatarPlaceholder = avatar.nombreYClub()
      document.getElementById("avatar-name").innerHTML = avatarPlaceholder;

      break;
    }
  }
    selectScreen.remove();
    $('#blurred-dark-overlay').fadeOut(2000); //Animación con jQuery

    $('header').css({
      "filter": "blur(0px)",
    });

    $('.goal-container').css({
      "filter": "blur(0px)",
    });

    $('.match-stats-container').css({
      "filter": "blur(0px)",
    });

    $('.avatar-container').css({
      "filter": "blur(0px)",
    });

    $('#shot-container').css({
      "filter": "blur(0px)",
    });

  setScore(points);
  score.innerHTML = `${points}`;
}


function showAvatar(e){
  e.preventDefault();
  if(e.target.classList.contains('izq') || e.target.classList.contains('der')){

    for(let animation of avatarShowAnimation){
      if(e.target.id == avatarShowAnimation.indexOf(animation)){
        avatarShow.setAttribute('class', `${avatarShowAnimation[e.target.id]}`);
        break;
      }
    }
  }
}


function resetAvatar(e){
  e.preventDefault();
  if(e.target.classList.contains('izq') || e.target.classList.contains('der')){
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


//Guardo un objeto en session sotorage con el método stringify y la función retorna un objeto JASON
function setStats(goal, miss){
  let stats = {goals: goal, missed: miss}; //Creo un objeto con las keys "goals" y "missed", y los valores los obtengo con los parámetros "goal" y "miss"
  let statsJSON = JSON.stringify(stats); // El objeto anteriormente creado es convertido a objeto legible como JSON con el método stringify
  sessionStorage.setItem("stats",statsJSON); //El objeto ahora legible como JSON se almacena en sessionStorage
 
  return statsJSON; //La función devuelve el objeto JSON
  
}

//Obtengo el objeto JSON guardado previamente con la función setStats() y lo utilizo como parámetro de getStats
function getStats(statStorage){ //El parámetro se obtiene de lo que retorna la función setStats
  
  let statObject = JSON.parse(statStorage); //Se parsea el objeto JSON para poder tratarlo como objeto de Javascript
  goalStats.innerHTML = `<p>${statObject.goals}</p>`; //Se acceden a los datos del objeto
  missedStats.innerHTML = `<p>${statObject.missed}</p>`; //Se acceden a los datos del objeto
}