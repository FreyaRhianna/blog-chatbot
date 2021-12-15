import Chatbot from 'react-chatbot-kit'
import React from "react";

import ActionProvider from './handlers/ActionProvider';
import MessageParser from './handlers/MessageParser';
import config from './handlers/config';

import "./App.css"
import "./main.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
