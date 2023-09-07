import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './routes/MainRoutes';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store"
import "./assets/index.css"



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <MainRoutes/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


