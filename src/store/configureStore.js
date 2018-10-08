import { createStore, combineReducers } from 'redux';
import tailsReducer from '../reducers/tails';

export default () => {
  const store = createStore(
    combineReducers({
      tails: tailsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
