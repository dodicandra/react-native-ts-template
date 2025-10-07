import {combineReducers} from 'redux';

import {authReducer} from './slice/auth';
import {countReducer} from './slice/count';

const baseReducer = {
  authReducer,
  countReducer,
};

const orderedReducer = Object.keys(baseReducer)
  .sort()
  .reduce((acc, item) => {
    acc[item] = baseReducer[item];
    return acc;
  }, {}) as typeof baseReducer;

export const rootReducers = combineReducers(orderedReducer);
