import { useState } from 'react'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'
import './App.css'

const App = () => {
  const [chatMessages, setChatMessages] = useState([])
  return (
    <div className="js-app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
