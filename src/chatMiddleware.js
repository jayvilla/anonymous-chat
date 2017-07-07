const CHAT_ERROR = '@@chat/error';
const CHAT_OPEN = '@@chat/open';
const CHAT_CLOSE = '@@chat/close';
const CHAT_SEND_MESSAGE = '@@chat/send/message';
const CHAT_RECEIVE_WELCOME = '@@chat/receive/welcome';
const CHAT_RECEIVE_NEW_MESSAGE = '@@chat/receive/new-message';
const CHAT_RECEIVE_USER_CONNECTED = '@@chat/receive/user-connected';
const CHAT_RECEIVE_USER_DISCONNECTED = '@@chat/receive/user-disconnected';
const CHAT_RECEIVE_UNKNOWN = '@@chat/receive/unknown';
const CHAT_CHANGE_MESSAGE = '@@chat/change/message';

const chatMiddleware = serverUrl => store => {
  let socket = new WebSocket(serverUrl);
  socket.onopen = () => {
    store.dispatch(chatOpen());
  };

  socket.onclose = () => {
    store.dispatch(chatClose());
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    store.dispatch(chatPayload(data));
  }

  socket.onerror = () => {
    store.dispatch(chatError());
  };

  return next => action => {
    switch (action.type) {
      case CHAT_SEND_MESSAGE:
        const message = { body: action.text };
        socket.send(JSON.stringify(message));
        break;
      default:
        break;
    }

    next(action);
  };
};

let actionType = (type) => () => ({ type });
let chatError = actionType(CHAT_ERROR);
let chatOpen = () => actionType(CHAT_OPEN);
let chatClose = () => actionType(CHAT_CLOSE);
let chatPayload = (data) => {
  const type = {
    'welcome': CHAT_RECEIVE_WELCOME,
    'new_message': CHAT_RECEIVE_NEW_MESSAGE,
    'user_connected': CHAT_RECEIVE_USER_CONNECTED,
    'user_disconnected': CHAT_RECEIVE_USER_DISCONNECTED,
  }[data.type] || CHAT_RECEIVE_UNKNOWN;

  return {
    type,
    payload: data.payload
  };
};

// Creates an action that signals a message to be sent to the server
const sendMessage = (text) => {
  return { type: CHAT_SEND_MESSAGE, text };
};

export {
  CHAT_ERROR,
  CHAT_OPEN,
  CHAT_CLOSE,
  CHAT_SEND_MESSAGE,
  CHAT_RECEIVE_WELCOME,
  CHAT_RECEIVE_NEW_MESSAGE,
  CHAT_RECEIVE_USER_CONNECTED,
  CHAT_RECEIVE_USER_DISCONNECTED,
  CHAT_RECEIVE_UNKNOWN,
  CHAT_CHANGE_MESSAGE,
  chatMiddleware,
  sendMessage,
};
