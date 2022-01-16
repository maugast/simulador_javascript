class Avatar{
    constructor(nombre, club, perfil, potencia, precision){
        this.nombre = nombre;
        this.club = club;
        this.perfil = perfil;
        this.potencia = potencia;
        this.precision = precision;
    }
    nombreYClub(){
        return `${this.nombre} - ${this.club}`;
    }  
    disparoExtraPotente(boost){
        this.potencia += boost;
        this.precision -= boost;
    }
}

