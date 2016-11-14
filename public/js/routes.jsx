import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import LandingPage from './components/landing/LandingPage';
import FixturesPage from './components/fixtures/FixturesPage';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LandingPage} />
            <Route path="/:username/fixtures">
                <IndexRoute component={FixturesPage} />
            </Route>
        </Route>
    </Router>
);

export default routes;