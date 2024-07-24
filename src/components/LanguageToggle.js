// src/components/LanguageToggle.js
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageToggle = () => {
    const { changeLanguage } = useContext(LanguageContext);

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>
                English
            </button>
            <button onClick={() => changeLanguage('fr')}>
                French
            </button>
            <button onClick={() => changeLanguage('es')}>
                Spanish
            </button>
        </div>
    );
};

export default LanguageToggle;
