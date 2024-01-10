let a = 5;

if ( a >= 10) { /* undefined, null, una asignación */
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

/* console.log('Fin del programa'); */

const hoy = new Date();
let dia = hoy.getDay(); /* 0: Domingo, 1: Lunes, 2: Martes... */

console.log( { dia });

if (dia === 0) { /* Un '=' es una asignación, doble '==', es para confirmar es igual al valor pero no importa el tipo y el triple '===' tiene que ser del mismo tipo*/
    console.log('Es domingo');
} else if ( dia === 1){
    console.log('Es lunes');

    /* if (dia === 1 ) {
        console.log('Es lunes');
    }  else {
        console.log('No es lunes ni domingo');
    } */
} else if ( dia === 2 ){
    console.log('Es martes');
} else {
    console.log('No es lunes, martes o domingo...');
}
