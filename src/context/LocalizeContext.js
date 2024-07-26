import React from 'react';
import { LocalizeProvider } from 'react-localize-redux';

export const LocalizeProviderWrapper = ({ children }) => (
  <LocalizeProvider>
    {children}
  </LocalizeProvider>
);