import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '../utils/theme';
import Sign from '../user/Sign';
const palette = muiTheme.palette;

class Introduction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userDialogOpen: false};
  }

  handleUserButton = () => this.setState({userDialogOpen: true});
  handleUserButtonClose = () => this.setState({userDialogOpen: false});

  render() {
    console.log(palette);
    return (
      <div className="container" style={{marginBottom: 120}}>
        <br/><br/><br/>
        <h1 className="center header" style={{color: palette.textColor}}>AI Playground</h1>
        <p className="center" style={{color: palette.textColor, fontSize: 19}}>It is more than coding.</p>
        <div className="center">
          <RaisedButton label="Get started"
                        labelStyle={{fontSize: 19, lineHeight: '50px', paddingLeft: 20, paddingRight: 20}}
                        style={{marginTop: 40, height: '50px'}}
                        secondary={true}
                        onTouchTap={this.handleUserButton} />
        </div>
        <Sign open={this.state.userDialogOpen}
              close={this.handleUserButtonClose}
              key="sign" />
      </div>
    );
    // Somehow different dialogs
  }
}

export default Introduction;