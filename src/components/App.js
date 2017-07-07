import React from 'react';
import ChatWindow from './ChatWindow';
import ChatBox from './ChatBox';

let App = (props) => {
  return (
    <div className="App">
      <ChatWindow />
      <ChatBox />
    </div>
  );
}

export default App;
