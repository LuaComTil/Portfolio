import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkMode ? darkTheme : lightTheme;
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setCurrentTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setCurrentTheme(prefersDarkMode ? darkTheme : lightTheme);
        }
    }, []);

    const toggleTheme = () => {
        setCurrentTheme(prevTheme => {
            const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
            localStorage.setItem('theme', newTheme === darkTheme ? 'dark' : 'light');
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
