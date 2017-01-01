import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Base from './Base';
import ButtonDocumentation from './components/ButtonDocumentation';
import Configuration from './Configuration';
import GettingStarted from './GettingStarted';
import About from './About';
import Home from './Home';
import Philosophy from './Philosophy';
import IntroducingXDRCLGuide from './guides/IntroducingXDRCL';

const routes = (
  <Route path="/" component={Base}>
    <Route path="getting-started" component={GettingStarted} />
    <Route path="component/button" component={ButtonDocumentation} />
    <Route path="configuration" component={Configuration} />
    <Route path="philosophy" component={Philosophy} />
    <Route path="about" component={About} />
    <Route path="guide/introducing-xdrcl" component={IntroducingXDRCLGuide} />
    <IndexRoute component={Home} />
  </Route>
);

module.exports = routes;
