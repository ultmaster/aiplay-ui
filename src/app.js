import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Main from './components/main';
import Introduction from './components/home/Introduction';
import ProblemFeed from './components/problem/ProblemFeed';
import Problem from './components/problem/Problem';
import Sign from './components/user/Sign';

import "./antd/antd.less";
import './styles/main.scss';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Introduction} />
      <Route path="sign" component={Sign} />
      <Route path="problem" component={ProblemFeed} />
      <Route path="problem/:id" component={Problem} />
    </Route>
  </Router>
), document.getElementById('app'));
