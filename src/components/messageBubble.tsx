import type { Message } from "../types";

type Props = {
  message: Message;
};

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={isUser ? "message-row user" : "message-row assistant"}>
      <div className="message-bubble">
        {message.content}
      </div>
    </div>
  );
}