import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '../utils/theme';
const palette = muiTheme.palette;

class ErrorPage extends React.Component {

  render() {
    return (
      <div className="container">
        <br/><br/><br/><br/>
        <h1 className="center header" style={{color: palette.textColor}}>{this.props.code}</h1>
        <p className="center" style={{color: palette.textColor, fontSize: 19}}>{this.props.message}</p>
        <div className="center">
          <RaisedButton label="Back to homepage"
                        labelStyle={{fontSize: 19, lineHeight: '50px', paddingLeft: 20, paddingRight: 20}}
                        style={{marginTop: 40, height: '50px'}}
                        secondary={true}
                        href="/"/>
        </div>
      </div>
    );
  }
}

export default ErrorPage;