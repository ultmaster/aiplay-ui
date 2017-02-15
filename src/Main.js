import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui/svg-icons/social/person';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {browserHistory, Link} from 'react-router';

const styles = {
  wrapper: {
    padding: 0,
    margin: 0,
  },
  container: {
    "padding-left": "15px",
    "padding-right": "15px",
    "max-width": "900px",
    "margin-left": "auto",
    "margin-right": "auto",
  },
  drawer: {
    width: "300px",
  }
};

const muiTheme = getMuiTheme(lightBaseTheme);

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleCloseDrawer = () => this.setState({open: false});

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.wrapper}>
            <AppBar
              iconElementRight={
                <IconButton href="/user"><Person /></IconButton>
              }
              onLeftIconButtonTouchTap={this.handleToggle}
            />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
            style={styles.drawer}
          >
            <Menu>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/problem">Problems</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/competition">Competition</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/board">Board</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/user">Sign In / Sign Up</MenuItem>
            </Menu>
          </Drawer>
          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
