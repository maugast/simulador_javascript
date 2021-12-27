//Se le pide al usuario que ingrese su nombre
let nombre = prompt('Ingresá tu Nombre');

//Se le pide al usuario que ingrese su edad
let edad = prompt('Ingresá tu edad');

edad = Number(edad);

if(edad >=1 && edad < 21){
    
    alert(`Felicidades ${nombre} estás en la flor de vida!!`);
}
else if(edad >= 21 && edad < 35){
    alert(`Esto recíen empieza ${nombre}!!`);
}
else if(edad >=35 && edad < 45){
    alert(`Sos como el buen vino ${nombre}!!`);
}
else if(edad >=45 && edad < 55){
    alert(`Todavía tenés mucha cuerda ${nombre}`);
}
else if(edad >= 55 && edad < 80){
    alert(`Hay mucha vida todavía ${nombre}`);
}
else if (edad >= 80 && edad <120){
     alert (`Tenés muchos años encima ${nombre}`);
}
else {
    alert (`Se introdujo un dato incorrecto, por favor volvé a intentarlo ${nombre}`);
}
