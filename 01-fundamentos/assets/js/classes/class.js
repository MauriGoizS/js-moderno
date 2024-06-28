
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

const spiderman = new Persona( 'Peter', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
// console.log( ironman );
// spiderman.quienSoy();
// ironman.quienSoy();
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de nuez de la tía May';
// spiderman.comida = 'Frijoles';

// console.log( spiderman.getComidadFavorita );
// console.log( spiderman );

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );