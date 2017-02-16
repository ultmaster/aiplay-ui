import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from '../utils/theme';

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
    this.handleClose = props.close;
  }

  componentWillReceiveProps = (nextProps) => this.setState({open: nextProps.open});
  select = (index) => this.setState({selectedIndex: index});

  signSubmit = (event) => {
    let keys = [];
    if (this.state.selectedIndex == 0)
      keys = ['username', 'password'];
    else
      keys = ['email', 'username', 'password'];
    let data = {};
    for (const key of keys) {
      data[key] = this.refs[key].getValue();
    }
    console.log(data);
    // SEND
    // this.refs['username'].setState({errorText: 'This field is required'});
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
        <TextField ref="password" style={inputStyles.textField} hintText="Password" type="password"/>
      </form>,
      <a onClick={() => this.select(1)}
         style={{cursor: 'pointer', color: muiTheme.palette.primary1Color}}>
        Do not have an account?</a>
    ];
    if (this.state.selectedIndex == 1) {
      title = 'Create an account';
      content = [
        <form>
          <TextField ref="email" style={inputStyles.textField} hintText="Email" type="email" key="email"/>
          <TextField ref="username" style={inputStyles.textField} hintText="Username" key="username"/>
          <TextField ref="password" style={inputStyles.textField} hintText="Password" type="password" key="password"/>
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