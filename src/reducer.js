import { CHAT_RECEIVE_NEW_MESSAGE, CHAT_CHANGE_MESSAGE } from './chatMiddleware';

export default function (state = {
  // set two default states
  messages: [],
  message: '',
}, action) {
  switch (action.type) {
    // receive a message from websocket and add it to the messages array
    case CHAT_RECEIVE_NEW_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      }
    // any time the user changes input field message will change with it
    case CHAT_CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }
    // default returns current state
    default:
      return state;
  }
}
