import React from 'react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
import ProblemDescription from '../components/problem/ProblemDescription';
import ProblemSubmitPage from '../components/problem/ProblemSubmitPage';
import ProblemRanklist from '../components/problem/ProblemRanklist';
import Manage from '../components/manage/Manage';
import Page from '../components/page';

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

  // TODO: mobile solution
  render() {
    const { problem } = this.props;
    const { activeItem } = this.state;
    return (
      <Page>
        <Container>
          <Header as="h1">Timofey and a tree</Header>
          <Menu stackable={true} tabular={true}>
            <Menu.Item name='description' active={activeItem === 'description'} onClick={this.handleItemClick} />
            <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick} />
            <Menu.Item name='ranklist' active={activeItem === 'ranklist'} onClick={this.handleItemClick} />
            <Menu.Item name="board" active={activeItem === 'board'} onClick={this.handleItemClick} />
            <Menu.Item name='manage' active={activeItem === 'manage'} onClick={this.handleItemClick} />
          </Menu>
          {activeItem == 'description' && <ProblemDescription text={problem.description}/>}
          {activeItem == 'submit' && <ProblemSubmitPage/>}
          {activeItem == 'ranklist' && <ProblemRanklist/>}
          {activeItem == 'manage' && <Manage/>}
        </Container>
      </Page>
    )
  }
}

export default Problem;