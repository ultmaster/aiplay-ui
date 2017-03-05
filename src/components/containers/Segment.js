import React from 'react';

class Segment extends React.Component {

  render() {
    if (this.props.label !== undefined) {

    }
    return (
      <div className="segment">
        <a className="label cyan">Submit</a>
        {this.props.children}
      </div>
    );
  }

}

export default Segment;
