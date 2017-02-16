import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import Auth from './user/auth';

require('./css/main.scss');


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



const NotFound = React.createClass({
    render() {
        return (
            <div>
                404
                NotFound
            </div>
        )
    }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="user" component={Auth} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));