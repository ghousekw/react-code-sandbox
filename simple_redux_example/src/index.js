import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import "./styles.css";

function App() {
  // step:2 create a reducer
  const reducer = function(state, action){
    if(action.type === 'ATTACK'){
      return action.payload;
    }
    if(action.type === 'GREENATTACK'){
      return action.payload;
    }
    return state;
  }
  // step:1 create a store
  const store = createStore(reducer, 'PEACE');
  // step:3 create a subscribe
  store.subscribe(()=> {
    console.log('Store is now', store.getState());
  })
  // step:4 create a dispatch
  store.dispatch({type:'ATTACK', payload: 'IRON MAN'});
  store.dispatch({type:'GREENATTACK', payload: 'HULK'}); 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
