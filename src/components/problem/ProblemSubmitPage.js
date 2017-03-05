import React from 'react';
import { Segment } from '../containers';
import Submit from '../submission/Submit';
import Submission from '../submission/Submission';

class ProblemSubmitPage extends React.Component {

  render() {
    return (
      <div>
        <Segment>
          <Submit />
        </Segment>
      </div>
    );
  }
}

export default ProblemSubmitPage;