import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from '../main/theme';
import Main from '../main/Main';

class ProblemFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userDialogOpen: false};
  }

  handleUserButton = () => this.setState({userDialogOpen: true});
  handleUserButtonClose = () => this.setState({userDialogOpen: false});

  render() {
    console.log(this.props.params.id);
    const content = (
      <div className="container">
        <div className="section">
          <div className="center">
            <TextField hintText="Search" />
          </div>
        </div>
        <div className="section">
          <Card>
            <CardHeader
              title="A+B Problem"
              subtitle="Subtitle"
              avatar="images/ok-128.jpg"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton secondary={true} label="View Problem" />
              <FlatButton label="Ranklist" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
      </div>
    );
    return <Main title="A + B Problem" content={content} />;
  }
}

export default ProblemFeed;