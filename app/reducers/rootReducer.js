// import { combineReducers } from 'redux';
import chatSumReducer from './chatSumReducer';
// 新版本redux-persist 修改
const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};
// 所有的redux管理的 state
const rootReducers = {
  rehydrated,
  chatSum: chatSumReducer,
};
export default rootReducers;
