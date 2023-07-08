import _ from 'underscore'

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const cardTypes    = ['C','D','H','S'];
const espetialCards = ['A','J','Q','K'];

/**
 * This function creates a new deck
 * @returns {Array<string>} A new Deck
 */
export const createDeck = () => {

    let deck = []
    for( let i = 2; i <= 10; i++ ) {
        for( let type of cardTypes ) {
            deck.push( i + type);
        }
    }

    for( let type of cardTypes ) {
        for( let esp of espetialCards ) {
            deck.push( esp + type);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}