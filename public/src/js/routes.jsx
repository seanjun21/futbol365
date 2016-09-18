import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import LandingPage from './components/landing/landing-page';
import FixturesPage from './components/fixtures/fixtures-page';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={LandingPage}/>
        <Route path="/fixtures" component={FixturesPage}/>
    </Router>
);

export default routes;