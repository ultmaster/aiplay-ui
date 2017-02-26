import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Introduction from './home/Introduction';
import NotFound from './error/404';
import ProblemFeed from './problem/ProblemFeed';
import Problem from './problem/Problem';
import Main from './main/Main';

import '../semantic/dist/semantic.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Introduction} />
      <Route path="problem" component={ProblemFeed} />
      <Route path="problem/:id" component={Problem} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));
