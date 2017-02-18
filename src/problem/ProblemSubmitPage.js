import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from '../main/theme';
const palette = muiTheme.palette;
import Main from '../main/Main';
import Submit from './Submit';
import Submission from './Submission';

class ProblemSubmitPage extends React.Component {


  render() {
    return (
      <div className="section">
        <div className="container">
          <Submit />
          <Submission />
        </div>
      </div>
    );
  }
}

export default ProblemSubmitPage;