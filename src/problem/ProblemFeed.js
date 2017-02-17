import React from 'react';
import TextField from 'material-ui/TextField';
import muiTheme from '../main/theme';
const palette = muiTheme.palette;
import Main from '../main/Main';

class ProblemFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userDialogOpen: false};
  }

  handleUserButton = () => this.setState({userDialogOpen: true});
  handleUserButtonClose = () => this.setState({userDialogOpen: false});

  render() {
    const content = (
      <div className="section">
        <div className="container">
          <div className="center">
            <TextField hintText="Search" />
          </div>
        </div>
      </div>
    );
    return <Main title="Problems" content={content} />;
  }
}

export default ProblemFeed;