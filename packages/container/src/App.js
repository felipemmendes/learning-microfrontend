import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

import { Marketing } from './components/Marketing';
import { Header } from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctr',
})

const App = () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header />
                <Marketing />
            </StylesProvider>
        </BrowserRouter>
    )
}

export { App };
