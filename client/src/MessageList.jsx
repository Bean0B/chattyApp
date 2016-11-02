import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div id="message-list">
        {this.props.messages.map((messageStuff, index) => {
          return <Message
          content ={messageStuff.content}
          username ={messageStuff.username}
          key ={index} />
        })
      }
      </div>
    )

  }
}

export default MessageList;