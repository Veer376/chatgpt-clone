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
  <div className="flex h-dvh flex-col bg-gradient-to-b from-slate-950 to-slate-800 text-slate-100">
    
    <h1 className="text-4xl font-extrabold text-center py-5 text-emerald-400 tracking-wide">
      ⬢ CHATGPT CLONE
    </h1>
    
    <MessagesContainer
      messages={messages}
      isLoading={isLoading}
    />

    <Composer
      value={input}
      onChange={setInput}
      onSend={sendMessage}
    />
  </div>
)

}

export default App
