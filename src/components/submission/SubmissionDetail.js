import React from 'react';
import { Menu, Segment, Container, Header } from 'semantic-ui-react';
import request from 'superagent';
import Manage from '../manage/Manage';
import Page from '../page';


class SubmissionDetail extends React.Component {

  state = { activeItem: 'description' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentWillMount = () => {
    const problem_id = this.props.params.id;
    request.get('api/submission/' + problem_id)
      .end((err, res) => {
        if (res.ok) {
          this.setState(JSON.parse(res.text));
        }
      });
  };

  // TODO: mobile solution
  render() {
    const { title, description } = this.state;
    const { activeItem } = this.state;
    return (
      <Page>
        <Container>
          <Header as="h1">{title}</Header>
          <Menu stackable={true} tabular={true}>
            <Menu.Item name='description' active={activeItem === 'description'} onClick={this.handleItemClick} />
            <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick} />
            <Menu.Item name='ranklist' active={activeItem === 'ranklist'} onClick={this.handleItemClick} />
            <Menu.Item name="board" active={activeItem === 'board'} onClick={this.handleItemClick} />
            <Menu.Item name='manage' active={activeItem === 'manage'} onClick={this.handleItemClick} />
          </Menu>
          {activeItem == 'description' && <ProblemDescription text={description}/>}
          {activeItem == 'submit' && <ProblemSubmitPage/>}
          {activeItem == 'ranklist' && <ProblemRanklist/>}
          {activeItem == 'manage' && <Manage/>}
        </Container>
      </Page>
    )
  }
}

export default Problem;