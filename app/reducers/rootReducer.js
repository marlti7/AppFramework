import { combineReducers } from 'redux';
import chatSumReducer from './chatSumReducer';

// 所有的redux管理的 state
const rootReducers = combineReducers({
  chatSum: chatSumReducer,
});
export default rootReducers;
