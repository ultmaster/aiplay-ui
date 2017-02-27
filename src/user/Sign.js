import React from 'react';
import { Button, Header, Image, Modal, Input, Segment, Grid } from 'semantic-ui-react';

class Sign extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, successOpen: false, selectedIndex: 0};
    this.close = props.onClose;
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
    // $.ajax({
    //   type: 'POST',
    //   url: source,
    //   data: data,
    //   error: function(data) {
    //     for (const key in data.responseJSON) {
    //       if (data.responseJSON.hasOwnProperty(key) && this.refs.hasOwnProperty(key)) {
    //         this.refs[key].setState({errorText: data.responseJSON[key]});
    //       }
    //     }
    //   }.bind(this),
    //   success: function(data) {
    //     console.log(data.responseJSON);
    //     this.handleClose();
    //     this.setState({successOpen: true});
    //   }.bind(this)
    // });

  };

  render() {
    // const actions = [
    //   <FlatButton
    //     label="Cancel"
    //     onTouchTap={this.handleClose}
    //   />,
    //   <FlatButton
    //     label="Submit"
    //     secondary={true}
    //     onTouchTap={this.signSubmit}
    //   />,
    // ];
    //
    // let title = 'Sign In Now';
    // let content = [
    //   <form>
    //     <TextField errorText="" ref="username" style={inputStyles.textField} hintText="Username"/>
    //     <br/>
    //     <TextField errorText="" ref="password" style={inputStyles.textField} hintText="Password" type="password"/>
    //     <br/>
    //   </form>,
    //   <a onClick={() => this.select(1)}
    //      style={{cursor: 'pointer', color: muiTheme.palette.primary1Color}}>
    //     Do not have an account?</a>
    // ];
    // if (this.state.selectedIndex == 1) {
    //   title = 'Create an account';
    //   content = [
    //     <form>
    //       <TextField errorText="" ref="email" style={inputStyles.textField} hintText="Email" type="email" key="email"/>
    //       <br/>
    //       <TextField errorText="" ref="username" style={inputStyles.textField} hintText="Username" key="username"/>
    //       <br/>
    //       <TextField errorText="" ref="password" style={inputStyles.textField} hintText="Password" type="password" key="password"/>
    //       <br/>
    //     </form>,
    //     <a onClick={() => this.select(0)} style={{cursor: 'pointer'}}>Click here if you already have an account.</a>
    //   ]
    // }

    return (
      <Modal open={this.state.open} closeOnDimmerClick={true} onClose={this.close} size="small">
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div className="ui stackable divided equal height stackable grid">
              <div className="eight wide column">
                <Input size="large" placeholder='Username' />
                <br /><br />
                <Input size="large" placeholder='Password' />
              </div>
              <div className="eight wide column">
                <p>Do you not have an account?</p>
                <Button basic primary>Sign Up Now</Button>
              </div>
            </div>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Nope
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}


export default Sign;