import { createStore, combineReducers } from 'redux';
import tailsReducer from '../reducers/tails';
import projectsReducer from '../reducers/projects';

export default () => {
  const store = createStore(
    combineReducers({
      tails: tailsReducer,
      projects: projectsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
