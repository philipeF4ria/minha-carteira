import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import dark from './styles/themes/dark';

import MainLayout from './components/MainLayout';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <MainLayout />
        </ThemeProvider>
    );
}

export default App;
