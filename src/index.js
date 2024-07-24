// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizeProvider>
        <App />
      </LocalizeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
