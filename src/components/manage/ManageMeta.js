import React from 'react';
import ManagePassage from './ManagePassage';
import { Form, Input, Dropdown, Button } from 'semantic-ui-react';
import AddUser from '../adduser';

class ManageMeta extends React.Component {
  render() {
    const publicSelections = [
      { key: 'draft', value: 'draft', text: 'Draft' },
      { key: 'review', value: 'review', text: 'Under Review' },
      { key: 'published', value: 'published', text: 'Published' }
    ];

    return (
      <Form>
        <Form.Field>
          <label>Problem Header</label>
          <Input fluid placeholder='Title' />
        </Form.Field>
        <Form.Field>
          <label>Co-workers</label>
          <AddUser/>
        </Form.Field>
        <Form.Field>
          <label>Publicity</label>
          <Dropdown placeholder='Make it public or not' selection={true} options={publicSelections} />
        </Form.Field>
        <Button positive content="Save" icon="checkmark" labelPosition="right"/>
      </Form>
    );
  }
}

export default ManageMeta;
