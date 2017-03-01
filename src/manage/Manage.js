import React from 'react';
import { Header, Message, Form, Input } from 'semantic-ui-react';
import ManageMeta from './ManageMeta';
import ManagePassage from './ManagePassage';
import ManageExample from './ManageExample';

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
      </div>
    );
  }
}

export default Manage;