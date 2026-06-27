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
   <div className="flex h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <MessagesContainer messages={messages} isLoading={isLoading} />
      <Composer value={input} onChange={setInput} onSend={sendMessage} />
    </div>
  )
}

export default App
