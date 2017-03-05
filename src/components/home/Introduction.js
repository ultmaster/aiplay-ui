import React, { Component } from 'react';

class Introduction extends React.Component {

  render() {

    const randomBackground = Math.ceil(Math.random() * 14);
    return (
      <div className="homepage">
        <div className="masthead" style={{backgroundImage: `url("images/background/${randomBackground}.jpg")`}}>
          <div className="header">
            <h1>AI Playground</h1>
            <p>It is more than coding.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;