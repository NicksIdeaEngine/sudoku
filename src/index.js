import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import GlobalStyles from './GlobalStyles';
import App from './App';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootContainer,
);
