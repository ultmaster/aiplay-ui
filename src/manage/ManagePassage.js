import React from 'react';
import { Segment, Button, Form, Input, TextArea, Message } from 'semantic-ui-react';

const mockData = [
  { name: 'First', text: 'hello' },
  { name: 'Input', text: 'hello' },
  { name: 'Output', text: 'hello' }
];

class ManagePassage extends React.Component {

  render() {
    return (
      <div>
      <Segment attached="top">
        <Message info>
          <Message.Header>Edit tips</Message.Header>
          <p>Use <code>'# '</code> to start a line to indicate it is a header.<br/>
          Use <code>'$'</code> to wrap math formula.<br/>
          Use <code>'`'</code> to wrap code blocks.</p>
        </Message>
      </Segment>
      {mockData.map((node) => (
        <Segment attached={true}>
          <Form>
            <Form.Field>
              <label>Block Title:</label>
              <Input fluid defaultValue={node.name} />
            </Form.Field>
            <Form.Field>
              <label>Block Text:</label>
              <TextArea defaultValue={node.text} />
            </Form.Field>
            <div style={{textAlign: "right"}}>
              <Button basic content="Delete" icon="trash" labelPosition="left"/>
            </div>
          </Form>
        </Segment>
      ))}
      <Button attached="bottom">Add a block</Button>
      </div>
    );
  }
}

export default ManagePassage;