


let playerName = prompt('!Bienvenido!, ingrese su nombre para continuar');

function PlayerNameSet(){
    document.getElementById("player-name").innerHTML = `Player 1: ${playerName}`;
}


let buttonShot = document.getElementById('shot');
buttonShot.addEventListener('click', ()=>{
    console.log('Disparo!');
} );

console.log(playerName);
