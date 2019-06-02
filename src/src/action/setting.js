// Action type declared globally to used in other lines 
// THIS IS GOOD because we only need to modify it in one place.
// We put export so other files can import these constants 
import  { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED} from "./types"





// We now have ACTION OBJECTS being dispatched from the result of using reusable ACTION CREATORS
export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true }
}; 

export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false }
}; 

export const expandInstructions = () => {
      return {type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }  
}

export const collapseInstructions = () => {
    return {type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }  
}
