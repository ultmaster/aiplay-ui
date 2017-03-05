import React from 'react';
import Submit from '../submission/Submit';
import Submission from '../submission/Submission';

class ProblemSubmitPage extends React.Component {

  render() {
    return (
      <div>
        <Submit />
        <Submission />
      </div>
    );
  }
}

export default ProblemSubmitPage;