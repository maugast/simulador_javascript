class Avatar{
    constructor(nombre, club, perfil, potencia, precision){
        this.nombre = nombre;
        this.club = club;
        this.perfil = perfil;
        this.potencia = potencia;
        this.precision = precision;
        this.temperamento = 0;
    }
    nombreYClub(){
        return `${this.nombre} - ${this.club}`;
    }  
    intimidarArquero(cantidad){
        this.temperamento += cantidad;
        this.potencia += cantidad;
        this.precision -= cantidad;
    }
    recibirIndicaciones(cantidad){
        this.temperamento -= cantidad;
        this.potencia -= cantidad;
        this.precision += cantidad;
    }
}

