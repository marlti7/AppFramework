import {
  CHAT_SUM,
} from '../constants/chatSumTypes';

// 刷新状态，loading状态
export function chatAdd() {
  return (dispatch) => {
    dispatch({
      type: CHAT_SUM,
      data: [], // 获取新数据
    });
  };
}
