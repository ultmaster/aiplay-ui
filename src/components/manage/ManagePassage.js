import React from 'react';
import { Segment, Button, Form, Input, TextArea, Message, Dropdown } from 'semantic-ui-react';

const mockData = [
  { name: 'description', text: 'hello' },
  { name: 'input', text: 'hello' },
  { name: 'output', text: 'hello' }
];

const blockSelections = [
  { key: "description", value: "description", text: "Description" },
  { key: "input", value: "input", text: "Input" },
  { key: "output", value: "output", text: "Output" }
];


class ManagePassage extends React.Component {

  render() {
    return (
      <div>
        <Message info>
          <Message.Header>Edit tips</Message.Header>
          <p>Use <code>'# '</code> to start a line to indicate it is a header.<br/>
          Use <code>'$'</code> to wrap math formula.<br/>
          Use <code>'`'</code> to wrap code blocks.</p>
        </Message>
        {mockData.map((node, index) => (
          <Segment attached={index==0?'top':true}>
            <Form>
              <Form.Field>
                <label>Block Type:</label>
                <Dropdown placeholder='Title here' defaultValue={node.name} selection={true} options={blockSelections} />
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
        <br/>
        <Button positive content="Save" icon="checkmark" labelPosition="right"/>
      </div>
    );
  }
}

export default ManagePassage;