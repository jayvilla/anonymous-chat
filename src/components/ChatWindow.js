import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  renderMessages() {
    const {messages} = this.props;
    return messages.map((message, i) =>
      <div className="chat-messages" key={i}><strong>{message.message.author}</strong>: {message.message.body}</div>
    )
  }

  render() {
    return (
      <div className="chat window">
        <div className="chat title">ChatWindow</div>
        <div className="messages">
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
