import React from 'react';
import { Header, Message, Form, Input, Divider } from 'semantic-ui-react';
import ManageMeta from './ManageMeta';
import ManagePassage from './ManagePassage';
import ManageExample from './ManageExample';
import ManageData from './ManageData';

class Manage extends React.Component {
  render() {
    return (
      <div>
        <Message info>
          <Message.Header>Please commit the change.</Message.Header>
          <p>When you are sure about the changes, please commit it at the bottom of the page.</p>
        </Message>
        <Header as="h2">Edit Metadata</Header>
        <ManageMeta/>
        <Header as="h2">Describe the problem</Header>
        <ManagePassage/>
        <Header as="h2">Add examples</Header>
        <ManageExample/>
        <Header as="h2">Test data</Header>
        <ManageData/>
        <Header as="h2">Pretest data</Header>
        <ManageData/>
      </div>
    );
  }
}

export default Manage;