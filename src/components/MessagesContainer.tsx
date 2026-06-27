import type { Message } from "../types";


interface MessagesContainerProps {
    messages: Message[];
    isLoading: boolean;
}

export default function MessagesContainer( { messages, isLoading }: MessagesContainerProps ) {


    return (
        <div className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
  <div className="flex min-h-[50vh] items-center justify-center text-center">
    <div>
      <h2 className="text-2xl font-semibold text-slate-200">
        What can I help you with today?
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Ask anything and start the conversation.
      </p>
    </div>
  </div>
) : 
  <div className="flex flex-col gap-4">
                {
                    messages.map((message) => (
                        <div
                           key={message.id}
                           className={`flex mb-4 ${
                           message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                          >
                            <div
                                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-md ${
                              message.role === "user"
                               ? "bg-blue-600 text-white ml-auto"
                               : "bg-white text-slate-900"
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