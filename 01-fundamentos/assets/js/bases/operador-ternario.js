const dia = 0; //0: domingo... 1: lunes...
const horaActual = 10;


let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las xx

/* if ( dia === 0 || dia === 6 ) { */
/* if  ( [0,6].includes( dia )) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de semana');
    horaApertura = 11
} */

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

/* if ( horaActual >= horaApertura) {
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`; //Backtick
} */

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;`Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });