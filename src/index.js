import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LanguageProvider } from './contexts/LanguageContext';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>,
  document.getElementById('root')
);