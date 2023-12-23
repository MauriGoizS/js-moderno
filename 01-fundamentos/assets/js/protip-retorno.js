const crearPersona = ( nombre, apellido )  => ({nombre, apellido}); /* Los ´parésis indica a js que todo lo que este dentro de los parésis como un objeto */

const persona = crearPersona( 'Mauricio', 'Goiz');
console.log( persona );



function imprimeArgumentos() {
    console.log( arguments);
}

imprimeArgumentos(10, true, false, 'Mauricio', 'Hola');


const imprimeArgumentos2 = ( edad, ...args /* Despues de este parametro no puede venir nada mas */) => {
    /* console.log( {edad, args} ); */
    return args;
}



const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Mauricio', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona( 'Mauricio', 'Goiz');
console.log({ nuevoApellido });



let tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


/* const imprimePropiedades = ( personaje ) => {
    console.log( 'Nombre:', personaje.nombre );
    console.log( 'Codename:', personaje.codename );
    console.log( 'Vivo;',personaje.vivo );
    console.log( 'Edad:', personaje.edad );
    console.log( 'Trajes:', personaje.trajes );
} */

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
    console.log( {nombre} );
    console.log( {codeName} );
    console.log( {vivo} );
    console.log( {edad} );
    console.log ( {trajes} );
}


imprimePropiedades( tony );
