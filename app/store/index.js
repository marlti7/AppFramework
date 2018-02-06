import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducers from '../reducers/rootReducer';

const config = {
  key: 'root',
  storage,
  // 设置是否缓存的reducer白黑名单
  // whitelist: [],
  // blacklist: ['chatSum'],
};
export default function configureStore() {
  const reducer = persistCombineReducers(config, rootReducers);
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunkMiddleware),
      // redux-devtools-extension 开发者工具需要
      devToolsEnhancer({ realtime: true, port: 8000 }),
    ),
  );
  const persistor = persistStore(store);
  return { persistor, store };
}
