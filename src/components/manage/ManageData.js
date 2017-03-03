import React from 'react';
import Upload from '../Upload';
import { Table, Dropdown, Input, Button, Checkbox, Form } from 'semantic-ui-react';

class ManageData extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pretest: props.pretest };
  }

  render() {

    const fileSelections = [
      { key: 'draft', value: 'draft', text: 'Draft' },
      { key: 'review', value: 'review', text: 'Under Review' },
      { key: 'published', value: 'published', text: 'Published' }
    ];

    return (
      <div>
        {this.state.pretest && <Checkbox label='Enable pretest' defaultChecked={true} />}
        <Upload />
        <Button primary label="Auto Match" icon="exchange" labelPosition="left" />
        <Table basic="very" singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={6}>Input</Table.HeaderCell>
              <Table.HeaderCell width={6}>Output</Table.HeaderCell>
              <Table.HeaderCell width={4}>Weight</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Input fluid defaultValue={10} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Input fluid defaultValue={10} /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Dropdown options={fileSelections} fluid selection={true}/></Table.Cell>
              <Table.Cell><Input fluid defaultValue={10} /></Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
        <Form>
          <Form.Field>
            <label>Judge</label>
            <Dropdown selection={true} options={fileSelections} />
          </Form.Field>
          <Form.Field>
            <label>Generator</label>
            <Dropdown selection={true} options={fileSelections} />
          </Form.Field>
        </Form>
        <br/>
        <Button positive content="Save" icon="checkmark" labelPosition="right"/>
      </div>
    );
  }
}

export default ManageData;