import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../chatMiddleware';
import changeMessage from '../actions';

class ChatBox extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.changeMessage(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.props.message);
    this.refs.chatinput.value = "";
    this.props.changeMessage('');
  }

  render() {
    return (
      <div className="chat-box">
        <form
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input
            className="chat-input"
            type="text"
            placeholder="Say something..."
            ref="chatinput"
            onChange={this.handleChange.bind(this)}
            />
          <button className="chat-button">Send</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    message: state.message,
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    sendMessage: sendMessage,
    changeMessage: changeMessage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
