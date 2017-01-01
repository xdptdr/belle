import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Base from './Base';
import ButtonDocumentation from './components/ButtonDocumentation';
import Configuration from './Configuration';
import GettingStarted from './GettingStarted';
import About from './About';
import Home from './Home';

const routes = (
  <Route path="/" component={Base}>
    <Route path="getting-started" component={GettingStarted} />
    <Route path="component/button" component={ButtonDocumentation} />
    <Route path="configuration" component={Configuration} />
    <Route path="about" component={About} />
    <IndexRoute component={Home} />
  </Route>
);

module.exports = routes;
