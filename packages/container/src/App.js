import React, { lazy, useState, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

import { Header } from './components/Header';
import { Progress } from './components/Progress';

const MarketingLazy = lazy(() => import('./components/Marketing').then((module) => ({ default: module.Marketing })));
const AuthLazy = lazy(() => import('./components/Auth').then((module) => ({ default: module.Auth })));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctr',
})

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
    )
}

export { App };
