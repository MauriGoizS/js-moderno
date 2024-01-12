const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');


/* for ( let i = 0; i < horoes.length; i++) */
for ( let i = 0 /* Inicialización de la variable )  */ ; 
    i < heroes.length /* Ejecución, siempre y cuando sea verdadera */; 
    i++ /* Incremento */ ) {
        console.log( heroes[i] );
    }

console.warn('For in');

for ( let i in heroes) {
    console.log( heroes[i])
}

console.warn('For of');

for ( let heroe of heroes ) {
    console.log( heroe ); 
}