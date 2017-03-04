import React from 'react';
import { connect } from 'react-redux';
import { Problem } from '../components/problem';

const mapStateToProps = (state) => {
  console.log("hello");
  console.log(state);
  return state;
};

const ProblemContainer = connect(mapStateToProps)(Problem);

export default ProblemContainer;