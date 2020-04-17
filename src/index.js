import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import './style.scss';
import App from './App';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootContainer,
);
