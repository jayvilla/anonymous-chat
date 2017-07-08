import reducer from './reducer';
import { chatMiddleware } from './chatMiddleware';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

export default function () {
  const middlewares = [
    chatMiddleware('wss://portal-coding-test-backend.herokuapp.com/api/chat'),
    thunk,
  ];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    reducer,
    // removed default state and implemented in reducer
    applyMiddleware(...middlewares),
  );
}
