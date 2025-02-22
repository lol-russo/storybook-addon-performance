import { TimedResult, StaticResult } from './types';
export default {
  START_ALL: 'start all',
  START_ONE: 'start one',
  FINISH_ALL: 'finish all',
  FINISH_ONE: 'finish one',
  PUBLISH_INTERACTIONS: 'publish interactions',
};

export type RunOne = {
  Params: { taskId: string; copies: number; samples: number };
  Result: { taskId: string; result: TimedResult | StaticResult };
};

export type RunAll = {
  Params: { copies: number; samples: number };
  Results: { results: [] };
};
