import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Sign from '../user/Sign';
import { hashHistory } from 'react-router';

export default class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      signItemOpen: false,
      signItemSelected: 0
    };
  }

  handleItemClick = (e, { name }) => {
    if (name === 'sign') {
      this.setState({ signItemOpen: true });
    } else {
      //this.setState({activeItem: name});
      const path = (name == 'home' ? '' : name);
      hashHistory.push(path);
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu className="large top fixed">
          <Menu.Item
            name="home"
            active={false}
            onClick={this.handleItemClick}
          >
            <img src='http://semantic-ui.com/images/logo.png' />
          </Menu.Item>

          <Menu.Item
            name='problem'
            active={activeItem === 'problem'}
            onClick={this.handleItemClick}
          >
            Problems
          </Menu.Item>

          <Menu.Item
            name='competition'
            active={activeItem === 'competition'}
            onClick={this.handleItemClick}
          >
            Competitions
          </Menu.Item>

          <Menu.Item
            name='board'
            active={activeItem === 'board'}
            onClick={this.handleItemClick}
          >
            Board
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="sign"
              active={false}
              onClick={this.handleItemClick}
            >
              Sign In / Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Sign open={this.state.signItemOpen} onClose={() => this.setState({ signItemOpen: false})} />
      </div>
    )
  }
}