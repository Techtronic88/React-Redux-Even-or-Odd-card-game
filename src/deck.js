import  { DECK } from "./types"

// Problem we have right now:
// We have type but the data we will need to pull in from fetch / cannot create our own
// NOTE: deckJson represents JSON data from a successful FETCH = remaining, deck_id 
// 
export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id } = deckJson
    return { type: DECK.FETCH_SUCCESS, remaining, deck_id }
}

// Convering previous fetch to Reuseable Fetch 
// Notice we won't need to use this.props.fetchDeckResult anymore
// Intead we can just use this.fetchDeckResult
export const fetchNewDeck = dispatch => {
   return fetch("https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle")
  .then(res => res.json())
  .then(json => dispatch(fetchDeckSuccess(json)))
}


