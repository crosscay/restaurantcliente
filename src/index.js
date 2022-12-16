import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './css/main.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();