import { useState } from 'react'
import Chatbot from 'supersimpledev/chatbot'
import './ChatInput.css'

export default function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(e) {
    setInputText(e.target.value)
  }

  function sendMessage() {
    if (!inputText.trim()) return

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ]
    setChatMessages(newChatMessages)

    // setChatMessages([
    //   ...newChatMessages,
    //   {
    //     message: <img src={LoadingSpinner} className="loading-spinner" />,
    //     sender: 'robot',
    //     id: crypto.randomUUID(),
    //   },
    // ])

    const response = Chatbot.getResponse(inputText)

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ])
    setInputText('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }
  return (
    <div className="js-chat-container">
      <input
        className="js-input"
        type="text"
        size="30"
        placeholder="Send a message to chatbot"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      <button className="js-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  )
}
