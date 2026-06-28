import type { Message } from "../types";
import { useEffect } from "react";
import markdownit from "markdown-it";
import {
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const md = markdownit();

interface MessagesContainerProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export default function MessagesContainer({
  messages,
  isLoading,
  error,
  retry,
}: MessagesContainerProps) {

  useEffect(() => {
    const messagesEnd = document.getElementById("messages-end");

    if (messagesEnd) {
      messagesEnd.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#212121] px-8 py-8">

      {messages.length === 0 ? (
        <div className="flex min-h-[70vh] items-center justify-center">
          <h1 className="text-4xl font-semibold text-gray-400">
            How can I help you today?
          </h1>
        </div>
      ) : (

        <div className="flex flex-col gap-8">

          {messages.map((message) => {

            const isUser = message.role === "user";

            return (

              <div
                key={message.id}
                className={`flex gap-4 ${
                  isUser
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {!isUser && (

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10A37F] text-white">

                    <Bot size={22} />

                  </div>

                )}

                <div
                  className={`group max-w-[75%] rounded-3xl px-5 py-4 shadow-lg ${
                    isUser
                      ? "bg-[#10A37F] text-white"
                      : "bg-[#2F2F2F] text-white"
                  }`}
                >

                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: md.render(message.content),
                    }}
                  />

                  {!isUser && (

                    <div className="mt-4 flex gap-4 opacity-0 transition-all duration-200 group-hover:opacity-100">

                      <button
                        onClick={() => copyMessage(message.content)}
                        className="text-gray-400 hover:text-white"
                      >
                        <Copy size={18} />
                      </button>

                      <button className="text-gray-400 hover:text-white">
                        <ThumbsUp size={18} />
                      </button>

                      <button className="text-gray-400 hover:text-white">
                        <ThumbsDown size={18} />
                      </button>

                    </div>

                  )}

                </div>

                {isUser && (

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#404040] text-white">

                    <User size={22} />

                  </div>

                )}

              </div>

            );

          })}

        </div>

      )}

      {isLoading && (

        <div className="mt-6 flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10A37F]">

            <Bot size={22} className="text-white" />

          </div>

          <div className="rounded-3xl bg-[#2F2F2F] px-5 py-4 text-white">

            🤖 Thinking...

          </div>

        </div>

      )}

      {error && (

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-red-100 p-4">

          <div className="text-red-700">
            {error}
          </div>

          <button
            onClick={retry}
            className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Retry
          </button>

        </div>

      )}

      <div id="messages-end" />

    </div>
  );
}