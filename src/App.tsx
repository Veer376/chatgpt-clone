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
  <div className="flex h-dvh flex-col bg-slate-900 text-slate-100">
    
    <h1 className="py-4 text-center text-3xl font-bold tracking-wide text-white">
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
