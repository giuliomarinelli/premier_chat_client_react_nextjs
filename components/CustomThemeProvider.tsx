'use client'
import React, { createContext, useMemo, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux-store/store';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../src/app/theme';


interface CustomThemeProviderProps {
    children: ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {

    const theme = useSelector((state: RootState) => state.theme.value);

    const muiTheme: Theme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

    console.log(muiTheme)

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}S
        </ThemeProvider>
    );
};