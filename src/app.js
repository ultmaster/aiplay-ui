import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
require('./css/main.scss');


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

const About = React.createClass({
    render() {
      console.log('about');
        return <h3>About</h3>
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
});

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
});

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
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
            <Route path="notok" component={Main} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
), document.getElementById('app'));