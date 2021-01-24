
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'

// REDUX
import { storeReducer } from './Redux/reducers/storeReducer'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger' // took logger out of applyMiddleware()

let store = createStore( storeReducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
  rootElement
);

