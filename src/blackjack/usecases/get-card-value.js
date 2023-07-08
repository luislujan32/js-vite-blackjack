/**
 * Get the value of a given card
 * @param {String} card 
 * @returns {Number} The value of the card
 */
export const cardValue = ( card ) => {

    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}