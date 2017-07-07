import {CHAT_CHANGE_MESSAGE} from './chatMiddleware';

const changeMessage = (msg) => {
  return {
    type: CHAT_CHANGE_MESSAGE,
    payload: msg
  }
};

export default changeMessage;
