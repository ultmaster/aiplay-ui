import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from '../main/theme';
import Main from '../main/Main';
import ProblemDescription from './ProblemDescription';
import ProblemSubmitPage from './ProblemSubmitPage';

// TODO: depth
// const zDepth = 1;
//
// const styles = {
//   tabs: {
//     boxShadow: muiTheme.paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
//     zIndex: muiTheme.appBar.zIndex
//   }
// };


class ProblemFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userDialogOpen: false};
  }

  handleUserButton = () => this.setState({userDialogOpen: true});
  handleUserButtonClose = () => this.setState({userDialogOpen: false});

  render() {
    console.log(this.props.params.id);
    console.log(muiTheme);
    const content = (
        <Tabs>
          <Tab label="Problem">
            <ProblemDescription />
          </Tab>
          <Tab label="Submit" >
            <ProblemSubmitPage />
          </Tab>
          <Tab label="Board" >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="Ranklist"
          >
            <div>
              <h2>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
    );
    return <Main title="A + B Problem" appBarDepth={0} content={content} />;
  }
}

export default ProblemFeed;