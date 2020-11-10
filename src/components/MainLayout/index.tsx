import React from 'react';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import MainContent from '../MainContent';

import { Grid } from './styles';

const MainLayout: React.FC = () => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <MainContent />
        </Grid>
    );
}

export default MainLayout;
