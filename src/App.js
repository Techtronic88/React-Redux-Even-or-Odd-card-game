import React, { Component } from 'react';
import { connect } from "react-redux";
import { startGame, cancelGame }  from "../action/setting";
import Instruction from "./Instruction"
import { fetchNewDeck } from "../action/deck"


class App extends Component {

// NOTE: Do not confuse this startGame function with startGame Action creators
// In this APP component onCLick={ this.startGame } as we are creating a brandnew function in this component
// inside  StartGame function we then call startGame action creators objects
startGame = () => {
  this.props.startGame();
  this.props.fetchNewDeck();

} 
  

render() {
console.log('this', this)
    return (
      <div> 
                <h2>&#9828;&#9825; Even or Odd	&#9831;&#9826; </h2>
                {
                  this.props.gameStarted ? (
                    <div>
                        <h3> The game is on </h3> <br/>
                        <button onClick={this.props.cancelGame}>Cancel Game</button>
                    </div>
                  ): (
                    <div>
                        <h3> The game is done  </h3><br/>
                        <button onClick={this.startGame}>Start Game</button>
                    </div>
                  )
                }
                <hr />
                <Instruction />
      </div>
    )
  }
}


const mapStateToProps = state => {
   console.log("state", state );
      return {gameStarted: state.gameStarted };
}

// ----- IGNORE THESE NOTES AS CODE HAS BEEN MODIFIED / UPDATED ----

// takes dispatch METHOD of REDUX store.dispatch 
// When mapDispatchToProps function REDUX passes in dispatch under the hood
// We return the action inside of mapDispatchToProps
// We will loop through each of those actions -> attach dispatch to it 
// RESULT: we now can directly access those actions via this.props.action 


// SINCE fetchDeckResult take in a Json parameter, we NEED to account for that in mapDispatchToProps WHY ???
// because that deckJson is argument passed in = json passed in 
// Store.dispatch needs to bind this properties so we can access them via props.
// startGame and cancelGame did not need any argument passed in BECAUSE we made the dummy data it was simple enough
// fetchDeckResult does not have that luxury


// ----- IGNORE THESE NOTES AS CODE HAS BEEN MODIFIED / UPDATED ----


const mapDispatchtoProps = dispatch =>  {
      return {
        startGame: () => dispatch(startGame()),
        cancelGame: () => dispatch(cancelGame()),
        fetchNewDeck: () => fetchNewDeck(dispatch)
      }
}
export default connect(mapStateToProps, mapDispatchtoProps) (App);