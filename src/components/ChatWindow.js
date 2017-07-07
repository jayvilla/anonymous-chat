import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {messages} = this.props;
    const mappedMessages = messages.map((message, i) =>
      <div key={i}>{message.message.author}: {message.message.body}</div>
    )
    return (
      <div>
        <div>ChatWindow</div>
        {mappedMessages}
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
