import React from 'react';
import { Button, Header, Image, Modal, Input, Segment, Grid } from 'semantic-ui-react';

class Sign extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, successOpen: false, selectedIndex: 0};
    this.close = props.onClose;
  }

  select = (id) => this.setState({selectedIndex: id});

  componentWillReceiveProps = (nextProps) => {
    this.setState({open: nextProps.open});
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

    let title = "Sign In";
    let form = (
      <form>
        <Input size="large" placeholder='Username' />
        <br /><br />
        <Input size="large" type="password" placeholder='Password' />
      </form>
    );
    let switchInfo = "Do you not have an account?";
    let switchButton = (<Button basic primary onClick={() => this.select(1)}>Sign Up Now</Button>);

    if (this.state.selectedIndex === 1) {
      title = 'Sign Up';
      form = (
        <form>
          <Input size="large" type="email" placeholder='Email' />
          <br /><br />
          <Input size="large" placeholder='Username' />
          <br /><br />
          <Input size="large" type="password" placeholder='Password' />
        </form>
      );
      switchInfo = "Already have an account?";
      switchButton = (<Button basic primary onClick={() => this.select(0)}>Sign In Now</Button>);
    }

    return (
      <Modal open={this.state.open} closeOnDimmerClick={true} onClose={this.close} size="small">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns='equal' stackable divided={true}>
              <Grid.Column>
                {form}
              </Grid.Column>
              <Grid.Column>
                <p>{switchInfo}</p>
                {switchButton}
              </Grid.Column>
            </Grid>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.close}>
            Close
          </Button>
          <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }
}


export default Sign;