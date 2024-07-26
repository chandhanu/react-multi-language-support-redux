import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocalizeProvider } from 'react-localize-redux';

ReactDOM.render(
      <React.StrictMode>
            <LocalizeProvider>
                  <App />
            </LocalizeProvider>
      </React.StrictMode>, 
  document.getElementById('root')
);