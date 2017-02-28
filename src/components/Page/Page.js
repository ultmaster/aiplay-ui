import React, { PropTypes } from 'react'

function Page(props) {
  const { children } = props;
  return <div className="page">{children}</div>
}

Page.propTypes = {

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

};

export default Page;
