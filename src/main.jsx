import React from 'react';
import ReactDOM from 'react-dom/client';  // Notez la nouvelle importation pour `createRoot`
import App from './App.jsx';
import './index.css';

// Créez un root en utilisant `createRoot` pour activer le mode concurrentiel
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application avec React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);