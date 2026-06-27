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
    <div className="flex h-dvh flex-col bg-slate-200 text-slate-90">
      <MessagesContainer messages={messages} isLoading={isLoading} />
      <Composer value={input} onChange={setInput} onSend={sendMessage} />
    </div>
  )
}

export default App
