import { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import './ChatMessages.css'

export default function ChatMessages({ chatMessages }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    container.scrollTop = container.scrollHeight
  }, [chatMessages])

  return (
    <div className="js-chat-messages-container" ref={containerRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
    </div>
  )
}
