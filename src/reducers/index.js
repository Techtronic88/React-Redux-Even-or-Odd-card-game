import  { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED, DECK } from "../action/types";

const DEFAULT_SETTINGS = {
    gameStarted: true,
    instructionsExpanded: false
}


const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    console.log('state', state, 'action', action);
    if(action.type === SET_GAME_STARTED){
        return {
            gameStarted: action.gameStarted, 
            instructionsExpanded: state.instructionsExpanded // We should not reverse any instruction expanded neither and disturb the value
        }
    }
    if( action.type === SET_INSTRUCTIONS_EXPANDED ) {
        return {
            gameStarted: state.gameStarted,
            instructionsExpanded: action.instructionsExpanded // USER CLICK Show Instruction: We do not want to disturb the curren status
        }
    }

    if ( action.type === DECK.FETCH_SUCCESS ) {
        const { remaining, deck_id } = action
        return {...state, remaining, deck_id }
    }

    if ( action.type === DECK.FETCH_DECK_ERROR) {
        return {...state, message: action.message }
    }
    return state;   
}

export default rootReducer;