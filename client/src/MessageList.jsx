import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("props=", this.props.data)
    return (
      <div id="message-list">
        {this.props.data.map((messageStuff, index) => {
          console.log(messageStuff)
          return <Message
          //content ={messageStuff.content}
          //username ={messageStuff.username}
          key ={index}
          body={messageStuff}/>
        })
      }
      </div>
    )
  }
}

export default MessageList;