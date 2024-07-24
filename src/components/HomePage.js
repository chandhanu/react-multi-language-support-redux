// src/components/HomePage.jsx
import React from 'react';
import LanguageToggle from './LanguageToggle';
import MyComponent from './MyComponent';
import { withLocalize } from 'react-localize-redux';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <h2><MyComponent /></h2>
            <LanguageToggle />
        </div>
    );
};

export default withLocalize(HomePage);
