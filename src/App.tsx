import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

import MainLayout from './components/MainLayout';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <MainLayout />
        </>
    );
}

export default App;
