import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import Confirm from './routes/confirm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={
          <App />
        }/>
        <Route path="/confirm" element={
          <Confirm/>
        }/>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
