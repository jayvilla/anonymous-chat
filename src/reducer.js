import { CHAT_RECEIVE_NEW_MESSAGE, CHAT_CHANGE_MESSAGE } from './chatMiddleware';

export default function (state = {
  messages: [],
  message: '',
}, action) {
  switch (action.type) {
    case CHAT_RECEIVE_NEW_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      }
      break;
    case CHAT_CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }
      break;
  }
  return state;
}
