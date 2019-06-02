import  { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED} from "../action/types";

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
    return state;   
}

export default rootReducer;