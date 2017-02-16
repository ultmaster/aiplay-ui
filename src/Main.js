import React, {Component} from 'react';
import {Breakpoint} from 'react-responsive-grid';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui/svg-icons/social/person';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {browserHistory, Link, withRouter} from 'react-router';
import muiTheme from './utils/theme';
import Sign from './user/Sign';

const appBarTheme = muiTheme.appBar;
const palette = muiTheme.palette;

const styles = {
  wrapper: {
    padding: 0,
    margin: 0,
  },
  appBar: {
    flatButton: {
      color: appBarTheme.textColor,
      verticalAlign: 'top',
      marginTop: (muiTheme.button.iconButtonSize - 36) / 2 + 1
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 20,
      fontWeight: 300,
      color: appBarTheme.textColor,
      height: appBarTheme.height,
      lineHeight: appBarTheme.height + 'px',
    },
    iconButtonStyle: {
      marginRight: 8,
      marginLeft: 0,
      padding: 0,
      verticalAlign: 'center'
    },
    iconButtonIconStyle: {
      fill: appBarTheme.textColor,
      color: appBarTheme.textColor
    }
  },
  drawer: {
    width: "256px",
  },
  logo: {
    cursor: "pointer",
    fontSize: 20,
    fontWeight: 300,
    lineHeight: "64px",
    paddingLeft: 18,
    marginBottom: 8,
    height: 64,
    backgroundColor: palette.primary1Color,
    color: "white",
  }
};


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false, userDialogOpen: false};
  }

  handleCloseDrawer = () => this.setState({open: false});
  handleOpenDrawer = () => this.setState({open: true});
  handleUserButton = () => this.setState({userDialogOpen: true});
  handleUserButtonClose = () => this.setState({userDialogOpen: false});

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.wrapper}>
          <div style={styles.container}>

          </div>
          <AppBar
            title={
              <div style={styles.appBar.title}>AI Playground</div>
            }
            onLeftIconButtonTouchTap={this.handleOpenDrawer}
            iconElementRight={
              <Breakpoint
                minWidth={960}
                widthMethod="pageWidth"
              >
                <div style={{marginRight: 8}}>

                  <FlatButton style={styles.appBar.flatButton} label="Problems" href="/problem"/>
                  <FlatButton style={styles.appBar.flatButton} label="Competitions" href="/competition"/>
                  <IconButton style={styles.appBar.iconButtonStyle}
                              iconStyle={styles.appBar.iconButtonIconStyle}
                              onTouchTap={this.handleUserButton}>
                    <Person style={styles.appBar.iconButtonIconStyle}/>
                  </IconButton>

                </div>
              </Breakpoint>

            }
          />
          <Sign open={this.state.userDialogOpen}
                close={this.handleUserButtonClose} />

          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            style={styles.drawer}
          >
            <div style={styles.logo}>AI Playground</div>
            <Menu>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/">Home</MenuItem>
              <Divider />
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/problem">Problems</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/competition">Competition</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/board">Board</MenuItem>
              <Divider />
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/account">Sign In</MenuItem>
              <MenuItem onTouchTap={this.handleCloseDrawer} href="/account">Sign Up</MenuItem>
            </Menu>
          </Drawer>
          <div>
            <div style={styles.container}>
              {this.props.children}
            </div>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(Main);
