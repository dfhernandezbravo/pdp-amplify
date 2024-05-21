import { EasyThemeProvider } from '@cencosud-cencommerce/eds';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EasyThemeProvider>{children}</EasyThemeProvider>;
};

export default ThemeProvider;
