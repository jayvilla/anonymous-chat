import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  // only scroll to bottom if chat-container and message exists
  componentWillUpdate() {
    if (document.querySelector(".chat-container") && document.querySelector(".message")) {
      this.scrollToBottom();
    }
  }
  // keep the most recent message showing
  scrollToBottom() {
    let messages = document.querySelector(".chat-container");
    let messageHeight = document.querySelector(".message").scrollHeight;
    messages.scrollTop += messageHeight;
  }
  // render current messages
  renderMessages() {
    const { messages } = this.props;
    return messages.map((message, i) =>
      <div
        className="message" key={i}>
        <strong>{message.message.author}</strong>: {message.message.body}</div>
    )
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-title">ChatWindow</div>
        <div className="message-container">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(ChatWindow);
