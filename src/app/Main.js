import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

const styles = {
  wrapper: {
    padding: 0,
    margin: 0,
  },
};

const muiTheme = getMuiTheme(lightBaseTheme);

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.wrapper}>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

// import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };
//
// const muiTheme = getMuiTheme(darkBaseTheme);
//
// class Main extends Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       open: false,
//     };
//   }
//
//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   }
//
//   handleTouchTap = () => {
//     this.setState({
//       open: true,
//     });
//   }
//
//   render() {
//     const standardActions = (
//       <FlatButton
//         label="Ok"
//         primary={true}
//         onTouchTap={this.handleRequestClose}
//       />
//     );
//
//     return (
//       <MuiThemeProvider muiTheme={muiTheme}>
//         <div style={styles.container}>
//           <Dialog
//             open={this.state.open}
//             title="Super Secret Password 2"
//             actions={standardActions}
//             onRequestClose={this.handleRequestClose}
//           >
//             1-2-3-4-5-6-7-8
//           </Dialog>
//           <h1>Material-UI</h1>
//           <h2>example project</h2>
//           <RaisedButton
//             label="Super Secret Password"
//             secondary={true}
//             onTouchTap={this.handleTouchTap}
//           />
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default Main;
