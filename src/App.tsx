import Composer from "./components/Composer";
import MessagesContainer from "./components/MessagesContainer";
import useChat from "./hooks/useChat";
import Sidebar from "./components/sidebar";

function App() {
  const {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading,
    error,
    retry,
    model,
    setModel,
    newChat
  } = useChat();

  return (
    <div className="app">
      <Sidebar newChat={newChat} />

      <div className="chat-container">

        {/* Header */}
        <header className="chat-header">

          <div className="header-left">
            <h2>ChatGPT Clone</h2>
            <p>Your AI Assistant</p>
          </div>

          <div className="header-model">
            {model}
          </div>

        </header>

        {/* Chat */}
        <MessagesContainer
          messages={messages}
          isLoading={isLoading}
          error={error}
          retry={retry}
        />

        {/* Composer */}
        <Composer
          value={input}
          onChange={setInput}
          onSend={sendMessage}
          model={model}
          onModelChange={setModel}
        />

      </div>
    </div>
  );
}

export default App;