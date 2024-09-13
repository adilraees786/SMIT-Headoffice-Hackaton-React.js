import React, { useState, useEffect } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Admin", text: "Welcome to Blood Donation Chat!" }
  ]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');

  // Simulating receiving new messages after a delay for demo purposes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages([...messages, { id: messages.length + 1, user: "Recipient", text: "I need O+ blood group" }]);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: userName || 'Anonymous',
        text: message.trim(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
        <div className="bg-red-600 text-white text-center p-4">
          <h2 className="text-2xl font-bold">Blood Donation Chat</h2>
        </div>
        <div className="flex flex-col h-full">
          <div className="p-4 h-96 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-4 ${msg.user === userName ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.user === userName ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'}`}>
                  <strong>{msg.user}: </strong> {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input section */}
          <div className="p-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-2 border rounded-md w-full mb-2"
            />
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="p-2 border rounded-md flex-grow"
              />
              <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
