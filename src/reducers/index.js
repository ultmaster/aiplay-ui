import { combineReducers } from 'redux';
import ProblemReducer from './ProblemReducer';

const reducer = combineReducers({
  problem: ProblemReducer
});

export default reducer;