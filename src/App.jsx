import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.pushNewMessage = this.pushNewMessage.bind(this);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
        username: "Bob",
        content: "Has anyone seen my marbles?",
        },
        {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        }
      ]
    }
  }
  pushNewMessage(name, content){
    console.log(name, content)
    const newMessage = {username: name, content: content};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }
  render() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Loquacious</h1>
        </nav>
        <div id="message-list">
          <MessageList messages={this.state.messages} />
          <Message />
        </div>
        <ChatBar currentUser={this.state.currentUser} newMessage={this.pushNewMessage} />
      </div>
    );
  }
}
export default App;
