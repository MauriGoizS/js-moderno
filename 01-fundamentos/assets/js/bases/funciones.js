function saludar(nombre /* Esto sería un argumento */) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
} /* Esto sería una función anónima */


const saludarFlecha = () => { /* A la función de flecha, los paréntesis son opcionales */
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => { /* A la función de flecha, los paréntesis son opcionales */
    console.log('Hola ' + nombre);
}


/* saludar('Fernando', 40, true, 'México');
saludar2('Mauricio')
saludarFlecha();
saludarFlecha2('Goku'); */


function saludar1_1(nombre){
    /* console.log(arguments);
    console.log('Hola', nombre); */
    return [1, 2, 3, 4, 5];
    console.log('Soy un código que esta despues del return');/* Esto nunca se va a ejecutar */
}

const retornoDeSaludar = saludar1_1('Fernando', 40, true, 'México');
/* console.log(retornoDeSaludar[0], retornoDeSaludar[1]); */


function sumar (a, b) {
    return a + b; 
}

const sumar2 = (a, b) => a + b; /* Las flechas sería el return */ 

console.log(sumar(1, 2));
console.log(sumar2(2, 3));



function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());

