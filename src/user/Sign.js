import React from 'react';
var $ = require('jquery');
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '../utils/theme';
import Settings from '../settings';

const customContentStyle = {
  maxWidth: 400
};

const inputStyles = {
  textField: {
    display: 'block'
  }
};

class Sign extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, selectedIndex: 0};
    this.handleClose = props.onClose;
    this.select = props.onSelected;
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({open: nextProps.open});
    if (nextProps.selected != null) {
      this.setState({selectedIndex: nextProps.selected});
    }
  };

  signSubmit = (event) => {
    let keys = [], source = '';
    if (this.state.selectedIndex == 0) {
      keys = ['username', 'password'];
      source = Settings.source + '/login/';
    } else {
      keys = ['email', 'username', 'password'];
      source = Settings.source + '/register/';
    }
    let data = {};
    for (const key of keys) {
      data[key] = this.refs[key].getValue();
    }
    console.log(JSON.stringify(data));
    // SEND REQUEST
    $.ajax({
      type: 'POST',
      url: source,
      data: data,
      error: function(data) {
        for (const key in data.responseJSON) {
          if (data.responseJSON.hasOwnProperty(key) && this.refs.hasOwnProperty(key)) {
            this.refs[key].setState({errorText: data.responseJSON[key]});
          }
        }
      }.bind(this),
      success: function(data) {
        console.log(data.responseJSON);
        this.handleClose();
      }.bind(this)
    });

  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        secondary={true}
        onTouchTap={this.signSubmit}
      />,
    ];

    let title = 'Sign In Now';
    let content = [
      <form>
        <TextField errorText="" ref="username" style={inputStyles.textField} hintText="Username"/>
        <br/>
        <TextField errorText="" ref="password" style={inputStyles.textField} hintText="Password" type="password"/>
        <br/>
      </form>,
      <a onClick={() => this.select(1)}
         style={{cursor: 'pointer', color: muiTheme.palette.primary1Color}}>
        Do not have an account?</a>
    ];
    if (this.state.selectedIndex == 1) {
      title = 'Create an account';
      content = [
        <form>
          <TextField errorText="" ref="email" style={inputStyles.textField} hintText="Email" type="email" key="email"/>
          <br/>
          <TextField errorText="" ref="username" style={inputStyles.textField} hintText="Username" key="username"/>
          <br/>
          <TextField errorText="" ref="password" style={inputStyles.textField} hintText="Password" type="password" key="password"/>
          <br/>
        </form>,
        <a onClick={() => this.select(0)} style={{cursor: 'pointer'}}>Click here if you already have an account.</a>
      ]
    }

    return (
      <div>
        <Dialog
          title={title}
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          {content}
        </Dialog>
      </div>
    );
  }
}


export default Sign;