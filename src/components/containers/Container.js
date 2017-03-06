import React from 'react';

class Container extends React.Component {
  render() {
    let { hPadding, vPadding } = this.props;
    hPadding = hPadding ? hPadding : '1rem';
    vPadding = vPadding ? vPadding : '1rem';
    return <div style={{paddingLeft: hPadding, paddingRight: hPadding,
                        paddingTop: vPadding, paddingBottom: vPadding}}>
      {this.props.children}
    </div>;
  }
}

export default Container;