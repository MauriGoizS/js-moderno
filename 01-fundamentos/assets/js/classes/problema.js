
const mau = {
    nombre: 'Mauricio',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    } 
}

const pedro = {
    nombre: 'Pedro',
    edad: 35,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    } 
}

// mau.imprimir();

function Persona( nombre, edad ) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre
    this.edad = edad

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    } 
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
console.log( maria );
maria.imprimir();
melissa.imprimir();