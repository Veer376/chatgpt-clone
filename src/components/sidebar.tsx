interface SidebarProps {
  newChat: () => void;
}

export default function Sidebar({ newChat }: SidebarProps) {
  return (
    <aside className="sidebar">

      <div>

        <h1 className="logo">
          🤖 ChatGPT Clone
        </h1>

        <button
          className="new-chat"
          onClick={newChat}
        >
          ➕ New Chat
        </button>

        <input
          type="text"
          placeholder="🔍 Search chats"
          className="search-box"
        />

        <div className="history">

          <div className="chat-item">
            💬 React Project
          </div>

          <div className="chat-item">
            💬 AI Chatbot
          </div>

          <div className="chat-item">
            💬 College Notes
          </div>

        </div>

      </div>

      <div>

        <button className="settings-btn">
          ⚙️ Settings
        </button>

        <div className="profile">
          👤 Amisha
        </div>

      </div>

    </aside>
  );
}