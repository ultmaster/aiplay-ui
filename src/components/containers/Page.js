import React, { PropTypes } from 'react'

const style = {
  padding: 50
};


function Page(props) {
  const { children } = props;
  return <div className="page" style={style}>{children}</div>
}

Page.propTypes = {

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

};

export default Page;
