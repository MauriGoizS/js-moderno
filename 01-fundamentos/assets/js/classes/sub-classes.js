
class Persona {
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidadFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    // Método
    quienSoy() {
        console.log( `Soy ${this.nombre} y mi edentidad es ${this.codigo}` );
    }

    // Método
    miFrase() {
        this.quienSoy();
        console.log( `${this.codigo} dice: ${this.frase}` );
    }

}

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'The Avengers';        
    }

    
    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }` );
        super.quienSoy();
    }

}

const spiderman = new Heroe( 'Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();


