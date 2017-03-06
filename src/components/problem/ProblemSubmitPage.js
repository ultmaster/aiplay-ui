import React from 'react';
import { Row, Col } from 'antd';
import { Segment, Container } from '../containers';
import Submit from '../submission/Submit';
import Submission from '../submission/Submission';

class ProblemSubmitPage extends React.Component {

  render() {
    return (
      <div>
        <Segment raised label="Submit your code" labelColor="blue">
          <Row>
            <Col xs={24} sm={20} md={16} lg={12}>
              <Container vPadding="0">
              <Submit />
              </Container>
            </Col>
          </Row>
        </Segment>
      </div>
    );
  }
}

export default ProblemSubmitPage;