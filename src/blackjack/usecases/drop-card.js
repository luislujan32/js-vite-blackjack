/**
 * Drop a new card
 * @param {Array<String>} deck Array of cards
 * @returns {String} returns a card
 */
export const dropCard = ( deck ) => {

    if (!deck || deck.length === 0 ) throw new Error('There are not cards at deck')

    const card = deck.pop();
    return card;
}