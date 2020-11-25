import React from "react";
import {createStore,applyMiddleware} from 'redux';
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import movies from './reducers';  
import rootReducer from './reducers';


// function logger(obk,next,action)
//logger(obj)(next)(action)
const logger=function({dispatch,getState}){
  return  function (next){
    return function (action){
      //middle
      console.log('Action type',action.type);
      next(action);
    }
  }
}

const store=createStore(rootReducer,applyMiddleware(logger));
console.log('store',store);
// console.log('STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}] 
// });

// console.log('AFTER STATE',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
