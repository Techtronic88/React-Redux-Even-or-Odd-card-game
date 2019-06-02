import React, { Component } from 'react';
import { connect } from "react-redux";
import {startGame,  cancelGame} from "../action/setting";



class App extends Component {
  
// THIS IS only use for when we use mapStateToProps parameter of connect()  
// gameCancel = () => { return this.props.dispatch(cancelGame())}
// beginGame = () => { return this.props.dispatch(startGame())}

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
                        <button onClick={this.props.startGame}>Start Game</button>
                    </div>
                  )
                }
      </div>
    )
  }
}
const mapStateToProps = state => {
   console.log("state", state );
      return {gameStarted: state.gameStarted };
}

const mapDispatchtoProps =  {
    startGame,
    cancelGame 
}

const componentConnector = connect(mapStateToProps, mapDispatchtoProps);
export default componentConnector(App);

