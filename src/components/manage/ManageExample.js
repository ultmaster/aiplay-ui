import React from 'react';
import { TextArea, Form, Segment, Button } from 'semantic-ui-react';

const mockData = [
  { input: 'aaa', output: 'bbb' },
  { input: 'ccc', output: 'ddd' }
];

class ManageExample extends React.Component {
  render() {
    return (
      <div>
        {mockData.map((node, index) => (
          <Segment attached={index==0?'top':true}>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field control={TextArea} label='Input' defaultValue={node.input} placeholder='Input' />
                <Form.Field control={TextArea} label='Output' defaultValue={node.output} placeholder='Output' />
              </Form.Group>
              <div style={{textAlign: "right"}}>
                <Button basic content="Delete" icon="trash" labelPosition="left"/>
              </div>
            </Form>
          </Segment>
        ))}
        <Button attached="bottom">Add an example</Button>
        <br/>
        <Button positive content="Save" icon="checkmark" labelPosition="right"/>
      </div>
    );
  }
}

export default ManageExample;