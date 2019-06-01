import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore  } from "redux";


const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

// Action type declared globally to used in other lines 
// THIS IS GOOD because we only need to modify it in one place.
const SET_GAME_STARTED = "SET_GAME_STARTED";
const SET_INSTRUCTIONS_EXPANDED = "SET_INSTRUCTIONS_EXPANDED";

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
const store = createStore(rootReducer);

console.log("store", store)
console.log("store.getState()", store.getState());


// NOTICE COMMON PRACTICE: Action type can be pulled out as it's own constant to be shared on otherlines
const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true }
}; 

const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false }
}; 

const expandInstructions = () => {
      return {type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }  
}

const cancelInstructions = () => {
    return {type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }  
}


// Store.subscribe takes a call back which fire everytime store gets interacted with and updated 
store.subscribe(() => console.log("store.getState()", store.getState()));


store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(cancelInstructions());

// WHAT IS THE MAIN TAKEAWAY
// We now have ACTION OBJECTS being dispatched from the result of using reusable ACTION CREATORS



ReactDOM.render(<App />, document.getElementById('root'));

