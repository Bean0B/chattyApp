import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Loquacious</h1>
        </nav>
        <div id="message-list">
          <MessageList />
          <Message />
        </div>
        <ChatBar />
      </div>
    );
  }
}
export default App;
