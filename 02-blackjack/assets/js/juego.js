/* 2C = Two of Clubs 
2D = Two of Diamonds 
2H = Two of Hearts
2S = Two of Spades */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');



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

    /* console.log( deck );
    console.log( carta ); */
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

/* const valor = valorCarta( pedirCarta() );
console.log({ valor }) */

const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta ); 
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ) {
            alert ('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert ('Jugador gana');
        } else if (puntosJugador === 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 15);
}







// Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta ); 
    /* console.log( puntosJugador ); */


    /* const puntosHTML = document.querySelector('small').innerHTML = puntosJugador; */
    /* puntosHTML */ 
    puntosHTML[0].innerText = puntosJugador;


    // <img class="carta" src="assets/cartas/10D.png" alt="carta">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true
        turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21) {
        console.warn('21, Genial');
        btnPedir.disabled = true;
        btnDetener.disabled = true
    }
});



btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;

    turnoComputadora( puntosJugador );

    
})




btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];

    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnDetener.disabled = false;
    btnPedir.disabled = false;
})