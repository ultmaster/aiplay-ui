import React, { Component } from 'react'
import { Menu } from 'antd';
import Sign from '../user/Sign';
import { hashHistory } from 'react-router';

const style = {
  appbarStyle: {
    lineHeight: "64px"
  }
};

export default class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      signItemOpen: false,
      signItemSelected: 0
    };
  }

  handleItemClick = ({ key }) => {
    console.log(key);
    const path = (key == 'home' ? '' : key);
    hashHistory.push(path);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        onSelect={this.handleItemClick}
        style={style.appbarStyle}
      >
        <Menu.Item key="home">AI Playground</Menu.Item>
        <Menu.Item key="problem">Problem</Menu.Item>
        <Menu.Item key="competition">Competition</Menu.Item>
        <Menu.Item key="sign">Sign In / Sign Up</Menu.Item>
      </Menu>
    );
  }
}