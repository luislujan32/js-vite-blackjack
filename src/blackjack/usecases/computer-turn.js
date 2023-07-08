import { dropCard, cardValue, drawCardHTML} from "./";

/**
 * Execute the computer's turn
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML HTML element to show points 
 * @param {Number} puntosMinimos minim amount of points that computer needs to win
 */
export const computerTurn = ( deck, puntosHTML, divCartasComputadora, puntosMinimos ) => {

    let puntosComputadora = 0

    if (!puntosHTML ) throw new Error('HTML points are required')
    if (!puntosMinimos ) throw new Error('minimun points are required')

    do {
        const carta = dropCard(deck);

        puntosComputadora = puntosComputadora + cardValue( carta );
        puntosHTML.innerText = puntosComputadora;
        
        divCartasComputadora.append( drawCardHTML( carta ) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    determineWinner(puntosComputadora, puntosMinimos )
}

const determineWinner = (puntosComputadora, puntosMinimos ) => {
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}