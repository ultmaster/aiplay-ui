import React from 'react';


const mockData = [
  { name: 'Description', text: 'hello' },
  { name: 'Input', text: 'hello' },
  { name: 'Output', text: 'hello' }
];

class ManagePassage extends React.Component {


  render() {
    return (
      <div>
        {mockData.map((node) => (
          <div>
            <p>{node.name}</p>
            <p>{node.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ManagePassage;