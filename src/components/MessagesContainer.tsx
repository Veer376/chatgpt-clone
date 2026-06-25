import type { Message } from "../types";


interface MessagesContainerProps {
    messages: Message[];
    isLoading: boolean;
}

export default function MessagesContainer( { messages, isLoading }: MessagesContainerProps ) {


    return (
        <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
                <div className="flex min-h-[50vh] items-center justify-center text-center text-sm text-slate-500">
                 What can I help you with today?
                </div>
            ) : <div className="flex flex-col gap-4">
                {
                    messages.map((message) => (
                        <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-md transition-all duration-200 ${
                                message.role === "user"
                                 ? "bg-white text-slate-950"
                                : "bg-slate-800 text-slate-100"
                         }`}
>
  {message.content}
</div>
                        </div>
                    ))
                }
                </div>
            }

            {isLoading && <div className="flex justify-center p-4 text-sm text-slate-500 animate-pulse"> Loading... </div>}
        </div>
    )
}