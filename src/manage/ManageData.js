import React from 'react';
import Upload from '../components/Upload';
import { Table, Dropdown, Input, Button } from 'semantic-ui-react';

class ManageData extends React.Component {

  render() {

    const fileSelections = [
      { key: 'draft', value: 'draft', text: 'Draft' },
      { key: 'review', value: 'review', text: 'Under Review' },
      { key: 'published', value: 'published', text: 'Published' }
    ];

    return (
      <div>
        <Upload />
        <Table celled>
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

        <Button positive content="Save" icon="checkmark" labelPosition="right"/>
      </div>
    );
  }
}

export default ManageData;