import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./redux/rootReducer";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";

const loggerMiddleware = store => next => action => {
    const result= next(action)
    console.log('Middleware', store.getState())
    return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
  <React.StrictMode>
      {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
