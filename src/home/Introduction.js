import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '../utils/theme';
const palette = muiTheme.palette;

class Introduction extends React.Component {

  render() {
    console.log(palette);
    return (
      <div className="container">
        <br/><br/><br/>
        <h1 className="center header" style={{color: palette.textColor}}>AI Playground</h1>
        <p className="center" style={{color: palette.textColor, fontSize: 19}}>It is more than coding.</p>

      </div>
    );
  }
}

export default Introduction;