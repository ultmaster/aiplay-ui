import React, { Component } from 'react'
import { Menu } from 'antd';
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
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    )
  }
}