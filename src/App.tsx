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
    <div className="flex h-dvh flex-col bg-slate-950 text-slate-90">
      <nav className="bg-slate-1200 text-white px-8 py-2">
       <div className="flex items-center justify-between">
         <div className="text-xl font-bold">
            CHATGPT
          </div>
       <ul className="hidden md:flex space-x-6">
         <li><a href="#" className="hover:text-gray-300">Free offers</a></li>
         <li><a href="#" className="hover:text-gray-300">Share</a></li>
         <li><a href="#" className="hover:text-gray-300">Login</a></li>
         <li><a href="#" className="hover:text-gray-300">?</a></li>
        </ul>
        </div>
      </nav>
      <MessagesContainer messages={messages} isLoading={isLoading} />
      <Composer value={input} onChange={setInput} onSend={sendMessage} />
    </div>
  )
}

export default App
