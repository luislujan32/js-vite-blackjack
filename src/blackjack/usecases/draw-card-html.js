
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} image of card to render
 */
export const drawCardHTML = ( carta ) => {

    if ( !carta ) throw new Error('Card is required')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta
}