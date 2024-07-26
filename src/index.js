import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocalizeProviderWrapper } from './context/LocalizeContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LocalizeProviderWrapper>
      <App />
    </LocalizeProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);