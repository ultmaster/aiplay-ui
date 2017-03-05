import Mock from 'mockjs';
import ProblemMock from './problem';


Mock.mock(/api\/problem\/detail\/(\d+)/,
  () => ProblemMock[0]
);
