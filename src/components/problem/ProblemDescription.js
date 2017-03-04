import React from 'react';


class ProblemDescription extends React.Component {
  render() {
    return (
      <div className="problem-description">
        <div dangerouslySetInnerHTML={{__html:this.props.text}}></div>
      </div>
    )
  };
}

export default ProblemDescription;