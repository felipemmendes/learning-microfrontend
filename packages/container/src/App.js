import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

import { Header } from './components/Header';
import { Progress } from './components/Progress';

const MarketingLazy = lazy(() => import('./components/Marketing').then((module) => ({ default: module.Marketing })));
const AuthLazy = lazy(() => import('./components/Auth').then((module) => ({ default: module.Auth })));
const DashboardLazy = lazy(() => import('./components/Dashboard').then((module) => ({ default: module.Dashboard })));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ctr',
})

const history = createBrowserHistory();

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn])


    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to='/' />}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
}

export { App };
