import Mock from 'mockjs';
import ProblemMock from './problem';


Mock.mock(/api\/problem\/(\d+)/,
  () => ProblemMock[0]
);
