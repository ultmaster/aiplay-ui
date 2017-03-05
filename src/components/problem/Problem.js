import React from 'react';
import { Tabs } from 'antd';
import request from 'superagent';
import ProblemDescription from './ProblemDescription';
import ProblemSubmitPage from './ProblemSubmitPage';
import ProblemRanklist from './ProblemRanklist';
import Manage from '../manage/Manage';


class Problem extends React.Component {

  state = {};

  componentWillMount = () => {
    const problem_id = this.props.params.id;
    request.get('api/problem/detail/' + problem_id)
      .end((err, res) => {
        if (res.ok) {
          this.setState(JSON.parse(res.text));
        }
      });
  };

  // TODO: mobile solution
  render() {
    const { title, description } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <Tabs defaultActiveKey="description">
          <Tabs.TabPane tab="Description" key="description">
            <ProblemDescription text={description}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Submit" key="submit">
            <ProblemSubmitPage/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Ranklist" key="ranklist">
            <ProblemRanklist/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Board" key="board">
            <Manage/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Manage" key="manage">Content of Tab Pane 3</Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Problem;