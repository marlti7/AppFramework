import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/rootReducer';

export default function configureStore() {
  const middleware = [];
  const enhancers = [];

  /* ------------- redux thunk Middleware ------------- */
  middleware.push(thunkMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  /* ------------- screen traker Middleware ------------- */
  const store = createStore(rootReducers, composeWithDevTools(...enhancers));
  return store;
}
