import { EasyThemeProvider } from '@ccom-eds-composer/composer';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EasyThemeProvider>{children}</EasyThemeProvider>;
};

export default ThemeProvider;
