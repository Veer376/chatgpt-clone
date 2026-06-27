import Composer from "./components/Composer";
import MessagesContainer from "./components/MessagesContainer";
import useChat from "./hooks/useChat";

function App() {

  const {
        messages,
        input,
        setInput,
        sendMessage,
        isLoading
    } = useChat();

  return (
  <div className="flex h-dvh flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
  <h1 className="py-5 text-center text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
    ChatGPT Clone
  </h1>

    <MessagesContainer messages={messages} isLoading={isLoading} />

    <Composer
      value={input}
      onChange={setInput}
      onSend={sendMessage}
    />
    
  </div>
)
}

export default App
