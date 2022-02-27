class Avatar{
    constructor(nombre, club, perfil, potencia, precision){
        this.nombre = nombre;
        this.club = club;
        this.perfil = perfil;
        this.potencia = potencia;
        this.precision = precision;
    }
    //Muestra datos del Avatar elegido en pantalla
    nombreYClub(){
        return `${this.nombre} - ${this.club}`;
    }
}

