const messages = []



const MessageList = () => {
  return (
    <div className="card">
        <div className="section-title">Messages</div>
        {messages.length === 0 ? (
        <div className="empty">No new messages</div>
        ) : (
        <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        )}
    </div>
  )
}

export default MessageList


       