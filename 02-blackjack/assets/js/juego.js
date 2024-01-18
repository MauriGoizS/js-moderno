/* 2C = Two of Clubs 
2D = Two of Diamonds 
2H = Two of Hearts
2S = Two of Spades */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];


/* Esta función crea un nuevo deck */
const crearDeck = () => {
    for( let i = 2; i <= 10; i++) {
        //deck.push( i + 'C');
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push( especial + tipo);
        }
    }

    /* console.log( deck ); */
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

crearDeck();


/* Esta función me permite tomar una carta */
const pedirCarta = () => {

    if (deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();

    console.log( deck );
    console.log( carta );
    return carta;
}

/* for (let i = 0; i <=100; i++) {
    pedirCarta();
} */

/* pedirCarta(); */

const valorCarta = (carta) => {
    const valor = carta.slice(0, -1);
    return ( isNaN( valor ) ) ?
        ( valor === 'A' ) ? 11 : 10
        : valor * 1;
    /* let puntos = 0; */

    /* if (isNaN(valor)) {
        puntos = ( valor === 'A') ? 11 : 10;
    } else {
        console.log('Es número');
        puntos = valor * 1;
    }
    console.log(puntos); */
}

const valor = valorCarta( pedirCarta() );
console.log({ valor })

