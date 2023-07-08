import { createDeck, dropCard, cardValue, computerTurn, drawCardHTML} from './usecases'

let deck         = [];
let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = createDeck();

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = dropCard(deck);
    
    puntosJugador = puntosJugador + cardValue( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    divCartasJugador.append( drawCardHTML( carta ) );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerTurn(deck, puntosHTML[1], divCartasComputadora, puntosJugador );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerTurn(deck, puntosHTML[1], divCartasComputadora, puntosJugador );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    computerTurn(deck, puntosHTML[1], divCartasComputadora, puntosJugador );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck()

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});




