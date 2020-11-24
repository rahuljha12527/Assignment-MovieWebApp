import React from "react";
import {createStore} from 'redux';
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import movies from './reducers';  
import rootReducer from './reducers';



const store=createStore(rootReducer);
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
