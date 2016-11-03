import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.pushNewMessage = this.pushNewMessage.bind(this);
    this.state = {
      currentUser: {name: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
  }

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:4000");
    this.socket.onopen = (event) => {
      console.log("Connected to Server.")
      this.socket.onmessage = (event) => {
        const newMessage = JSON.parse(event.data)
        const post = this.state.messages.concat(newMessage)
        this.setState({messages: post})
        }
    };
  }

  sendMessageToServer(messageObject){
    this.socket.send(JSON.stringify(messageObject))
  }

  pushNewMessage(name, content){
     const newMessage = {
      username: name,
      content: content,
    };
  this.sendMessageToServer(newMessage)
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
