let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: - 118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Endgame'
}; /* Cuando tengamos las llaves, hay que asociarlo a un objeto literal*/

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log('Coords:', personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('Cant. de trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última pelicula:', personaje["ultima-pelicula"]);


/* Más detalles */

delete personaje.edad;
console.log(personaje); 

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);
Object.freeze(personaje);/* El 'Object.freeze' congela el objeto tal y como estaba en el momento que se hace la instrucción*/

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'México';
console.log(personaje);

Object.freeze(personaje.direccion);
personaje.direccion.ubicacion = 'Argentina';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);/* Hace un listado de cuanto tiene ese objeto  */
const valores = Object.values(personaje);/* 'values', nos sirve para poder ver sus valores */
console.log({propiedades, valores});