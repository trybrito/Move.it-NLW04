import React from 'react';
import ReactDOM from 'react-dom'; // fazemos a importação da DOM (Document Object Model), que torna possível trabalharmos com o browser.
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // realiza uma busca no arquivo index.html por um componente que possua o ID root. 
);
