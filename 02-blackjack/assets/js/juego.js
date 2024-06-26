    const miModulo = (() => {
    "use strict";

    const tipos = ["C", "D", "H", "S"];
    const especiales = ["A", "J", "Q", "K"];
    const MAX_POINTS = 21;
    const ACE_VALUE = 11;
    const FACE_CARD_VALUE = 10;
    const PLAYER_INDEX = 0;
    const COMPUTER_INDEX = 1;

    let deck = [];
    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
        puntosHTML = document.querySelectorAll("small");

    // Inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = Array(numJugadores).fill(0);
        puntosHTML.forEach((elem, i) => (elem.innerText = 0));
        divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    };

    // Crea un nuevo deck
    const crearDeck = () => {
        const nuevoDeck = [];
        for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            nuevoDeck.push(i + tipo);
        }
        }
        for (let tipo of tipos) {
        for (let esp of especiales) {
            nuevoDeck.push(esp + tipo);
        }
        }
        return _.shuffle(nuevoDeck);
    };

    // Toma una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
        throw "No hay cartas en el deck";
        }
        return deck.pop();
    };

    const valorCarta = (carta) => {
        const valor = carta.slice(0, -1);
        return isNaN(valor)
        ? valor === "A"
            ? ACE_VALUE
            : FACE_CARD_VALUE
        : parseInt(valor, 10);
    };

    // Acumula puntos
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    };

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert("Nadie gana :(");
        } else if (puntosMinimos > MAX_POINTS) {
            alert("Computadora gana");
        } else if (puntosComputadora > MAX_POINTS) {
            alert("Jugador gana");
        } else {
            alert("Computadora gana");
        }
        }, 100);
    };

    // Turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
        const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1);
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= MAX_POINTS);

        determinarGanador();
    };

    // Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, PLAYER_INDEX);
        crearCarta(carta, PLAYER_INDEX);

        if (puntosJugador > MAX_POINTS) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
        } else if (puntosJugador === MAX_POINTS) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[PLAYER_INDEX]);
    });

    btnNuevo.addEventListener("click", () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego,
    };
    })();
