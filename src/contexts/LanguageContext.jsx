// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadTranslations, setActiveLanguage } from '../redux/store';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [activeLanguage, setActiveLanguageState] = useState('en');
    const dispatch = useDispatch();

    const changeLanguage = useCallback((lang) => {
        loadTranslations(lang);
        dispatch(setActiveLanguage(lang));
        setActiveLanguageState(lang);
    }, [dispatch]);

    useEffect(() => {
        changeLanguage('en'); // Set initial language to English
    }, [changeLanguage]);

    return (
        <LanguageContext.Provider value={{ activeLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };