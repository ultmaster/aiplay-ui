import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/main';
import Introduction from './components/home/Introduction';
import ProblemFeed from './components/problem/ProblemFeed';
import Problem from './components/problem/Problem';
import Reducer from './reducers';

import './components/css/main.scss';
import '../semantic/dist/semantic.css';

const store = createStore(Reducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={Introduction} />
        <Route path="problem" component={ProblemFeed} />
        <Route path="problem/:id" component={Problem} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
