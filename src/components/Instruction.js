import React from 'react';
import { connect } from "react-redux";
import {expandInstructions,  collapseInstructions} from "../action/setting";


const Instruction = props => {
        return (
            props.instructionsExpanded ? 
            (  
          <div>    
              <h3>Instruction</h3>
              <p> Welcome to even or odds. The game goes like this</p>
              <p> The deck is shuffled. Then choose: will the next card be even or odd?</p>
              <p> Make a choice on every draw, and see how many you get right!</p> 
              <p>(Face cards don't count)</p>
              <button onClick={props.collapseInstructions}>Show Less </button>
          </div>
          ):
          (
           <div>
              <p>Instruction</p>
              <p>Wecome to even or odds. The game goes like this...</p>      
              <button onClick={props.expandInstructions}> Show Less </button>
          </div> 
          )  

        )                                     
}

// const mapStateToProps = state => {
//        return {instructionsExpanded: state.instructionsExpanded };
//  }
 
//  const mapDispatchtoProps =  {
//        expandInstructions,    //instructionsExpanded: true
//        collapseInstructions   //instructionsExpanded: false
//  }  
 
 export default connect (
     state =>  ({instructionsExpanded: state.instructionsExpanded }),
    { expandInstructions, collapseInstructions}) (Instruction);

