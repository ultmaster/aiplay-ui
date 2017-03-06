import React from 'react';

class Segment extends React.Component {

  render() {
    let { raised, label, labelColor } = this.props;
    raised = (raised ? 'raised' : '');
    labelColor = (labelColor ? labelColor : 'cyan');
    return (
      <div className={`segment ${raised}`}>
        {label !== undefined && <a className={`label ${labelColor}`}>{label}</a>}
        {this.props.children}
      </div>
    );
  }

}

export default Segment;
