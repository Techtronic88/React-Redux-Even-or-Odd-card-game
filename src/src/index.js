import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from "redux";
import { Provider } from "react-redux";
import App from './components/App'; 
import rootReducer from "./reducers" // The only file in reducers will be selected automaticlly. 
import { composeWithDevTools } from 'redux-devtools-extension';




const store = createStore(rootReducer, composeWithDevTools());



// Store.subscribe takes a call back which fire everytime store gets interacted with and updated 
store.subscribe(() => console.log("store.getState()", store.getState()));

ReactDOM.render(
    
    <Provider store={store}>
      <App /> 
    </Provider>,
    document.getElementById('root')
    );

