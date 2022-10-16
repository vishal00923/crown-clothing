import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
