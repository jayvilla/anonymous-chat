import { CHAT_CHANGE_MESSAGE } from './chatMiddleware';

// creates an action that signal change in input field
const changeMessage = msg => {
  return {
    type: CHAT_CHANGE_MESSAGE,
    payload: msg,
  }
};

export default changeMessage;
