import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { onPostChange, sendMessage } from  './data/Data.js'
import {addPost} from './data/Data.js'
export let rerenderTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App 
      state = {state}
      onPostChange={onPostChange}
      addPost={addPost} 
      sendMessage= {sendMessage}
    />
  </React.StrictMode>,
  document.getElementById('root')
);}
reportWebVitals();
