import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Introduction from './home/introduction';
import NotFound from './error/404';


require('./css/main.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Introduction} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));