import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Introduction from './home/Introduction';
import NotFound from './error/404';
import ProblemFeed from './problem/ProblemFeed';
import Problem from './problem/Problem';

import './css/main.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={Introduction} />
    <Route path="/problem" component={ProblemFeed} />
    <Route path="/problem/:id" component={Problem} />
    <Route path="*" component={NotFound} />
  </Router>
), document.getElementById('app'));