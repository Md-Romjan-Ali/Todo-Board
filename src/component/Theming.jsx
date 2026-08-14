import { ThemeProvider } from 'next-themes';
import React from 'react';

const Theming = ({ children }) => {
    return (
        <div>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </div>
    );
};

export default Theming;