import  { FETCH_DECK_RESULT } from "./types"

// Problem we have right now:
// We have type but the data we will need to pull in from fetch / cannot create our own
// NOTE: deckJson represents JSON data from a successful FETCH = remaining, deck_id 
// 
export const fetchDeckResult = deckJson => {
    const { remaining, deck_id } = deckJson
    return { type: FETCH_DECK_RESULT, remaining, deck_id }
}



