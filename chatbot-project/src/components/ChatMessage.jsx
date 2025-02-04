import Robot from '../assets/robot.png'
import User from '../assets/user.png'
import './ChatMessage.css'

export default function ChatMessage({ message, sender }) {
  return (
    <div className={sender === 'user' ? 'js-chat-user' : 'js-chat-robot'}>
      {sender === 'robot' && (
        <img src={Robot} alt="robot" className="js-chat-img-robot" />
      )}
      <div className="js-chat-message">{message}</div>
      {sender === 'user' && (
        <img src={User} alt="user" className="js-chat-img-user" />
      )}
    </div>
  )
}
