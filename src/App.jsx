// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import MyComponent from './components/MyComponent';
import { withLocalize } from 'react-localize-redux';

function App() {
    return (
        <Provider store={store}>
            <LanguageProvider>
                <MyComponent />
                <LanguageToggle />
            </LanguageProvider>
        </Provider>
    );
}

export default withLocalize(App);