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
    //Método a utilizar en próximos desafíos
    disparoExtraPotente(boost){
        this.potencia += boost;
        this.precision -= boost;
    }
}
