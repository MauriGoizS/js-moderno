/* Tipos de datos */


/* --------Strings -------- */
let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;/* Para sacar el acento grave es con: alt + 96 */

console.log(typeof nombre);/* Para saber el tipo de dato que apunta una variable */

nombre = 123;
console.log(typeof nombre);



/* --------Booleanos -------- */

let esMarvel = true;
console.log(typeof esMarvel);



/* --------Numbers -------- */

let edad = 20;
console.log(typeof edad);

edad = 20.00021;
console.log(typeof edad);



/* --------Undefined -------- */
/* cameCase */

let superPoder;
console.log(typeof superPoder);



/* --------Null -------- */
let soyNull = null;
console.log(typeof soyNull);



/* --------Symbol -------- */
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);