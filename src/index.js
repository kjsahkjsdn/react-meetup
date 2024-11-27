import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { store } from './state/store';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);