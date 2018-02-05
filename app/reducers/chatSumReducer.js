import {
  CHAT_SUM,
} from '../constants/chatSumTypes';

const initialState = {
  chatNum: 0,
};

export default function login(state = initialState, action) {
  // 获取来自action 携带的数据
  // const { data } = action;
  const oldChatNum = state.chatNum;
  switch (action.type) {
    case CHAT_SUM:
      return Object.assign({}, state, {
        chatNum: oldChatNum + 1,
      });
    default:
      return state;
  }
}
