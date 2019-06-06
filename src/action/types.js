// NOTICE COMMON PRACTICE: action type: "SET_GAME_STARTED" is converted to const SET_GAME_STARTED 
// DON'T FORGET type: SET_GAME_STARTED is action REDUCERS are listening / watching out DON'T FOR


// Action type declared globally to used in other lines 
// THIS IS GOOD because we only need to modify it in one place.

export const SET_GAME_STARTED = "SET_GAME_STARTED";
export const SET_INSTRUCTIONS_EXPANDED = "SET_INSTRUCTIONS_EXPANDED";
export const FETCH_DECK_RESULT = "FETCH_DECK_RESULT";
export const FETCH_DECK_ERROR = "FETCH_DECK_ERROR";


export const DECK = {
    FETCH_SUCCESS: "FETCH_DECK_RESULT",
    FETCH_ERROR: "FETCH_DECK_ERROR"
};