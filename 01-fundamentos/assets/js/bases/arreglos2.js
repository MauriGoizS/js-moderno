let juegos = ['Resident Evil', 'Mario', 'Fifa 23', 'Rocket League'];
console.log('Largo', juegos.length);/* length: nos ayuda a saber cuántos elementos hay en el arreglo */

let primero = juegos[2 -2];
let ultimo = juegos[juegos.length -1];

console.log({primero, ultimo});


juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('Pacman'); /* push: Para añadir mas elementos a mi arreglo */
console.log({nuevaLongitud, juegos});


nuevaLongitud = juegos.unshift('Minecraft');/* unshift: Para añadir el elemento al inicio del arreglo */
console.log({nuevaLongitud, juegos});


let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


let posicion = 1;
console.log(juegos);
let juegoBorrados = juegos.splice(posicion, 2);/* posicion es donde va a comenzar a borrar y el número 2, de cuántos elementos quiero que se borre */

console.log({juegoBorrados, juegos});

let fifa23Index = juegos.indexOf('Fifa 23');/* El indexOf, es para buscar el elemento y si aparece -1, es que no encontro el elemento ya que podria no estar bien escrito */
console.log({fifa23Index});  