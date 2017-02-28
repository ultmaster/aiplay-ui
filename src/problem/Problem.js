import React from 'react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
// import TextField from 'material-ui/TextField';
// import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import FlatButton from 'material-ui/FlatButton';
// import muiTheme from '../main/theme';
// import Main from '../main/Main';
import ProblemDescription from './ProblemDescription';
import Page from '../components/Page/Page';
import './Problem.scss';
// import ProblemSubmitPage from './ProblemSubmitPage';
//
// // TODO: depth
// // const zDepth = 1;
// //
// // const styles = {
// //   tabs: {
// //     boxShadow: muiTheme.paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
// //     zIndex: muiTheme.appBar.zIndex
// //   }
// // };


class Problem extends React.Component {

  state = { activeItem: 'description' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Page>
        <Container>
          <Header as="h1">Timofey and a tree</Header>
          <Menu tabular={true}>
            <Menu.Item name='description' active={activeItem === 'description'} onClick={this.handleItemClick} />
            <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick} />
            <Menu.Item name='ranklist' active={activeItem === 'ranklist'} onClick={this.handleItemClick} />
            <Menu.Item name='management' active={activeItem === 'management'} onClick={this.handleItemClick} />
          </Menu>
          {activeItem == 'description' && <ProblemDescription />}
        </Container>
      </Page>
    )
  }
}

export default Problem;