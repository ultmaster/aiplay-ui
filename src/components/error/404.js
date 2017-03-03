import React from 'react';
import ErrorPage from './error';

class NotFound extends React.Component {

  render() {
    return <ErrorPage code="NOT FOUND" message="You will be remembered for discovering a new land."/>
  }
}

export default NotFound;