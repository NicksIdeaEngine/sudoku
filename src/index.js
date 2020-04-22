import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import './styles/main.scss';
import App from './App';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootContainer,
);
