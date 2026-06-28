import type { Message } from '../types';
import { useEffect } from 'react';
import markdownit from 'markdown-it';

const md = markdownit();

interface MessagesContainerProps {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    retry: () => void;
}

export default function MessagesContainer({ messages, isLoading, error, retry }: MessagesContainerProps) {
    useEffect(() => {
        document.getElementById('messages-end')?.scrollIntoView(true);
    });

    return (
        <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
                /* Fixed capitalisation: "I" → uppercase; centred with a touch more vertical space */
                <div className="flex min-h-[50vh] items-center justify-center text-sm text-slate-400 font-medium">
                    What can I help you with?
                </div>
            ) : (
                <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] text-sm leading-6 ${
                                    message.role === 'user'
                                        /* User bubble: pill shape, white card */
                                        ? 'bg-white text-slate-900 rounded-3xl px-4 py-3 shadow-sm'
                                        /* Assistant response: subtle left border for clarity */
                                        : 'text-slate-800 border-l-2 border-slate-300 pl-3'
                                }`}
                            >
                                <div dangerouslySetInnerHTML={{ __html: md.render(message.content) }} />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Replaced plain "Loading..." text with animated dots for a polished feel */}
            {isLoading && (
                <div className="flex justify-start max-w-2xl mx-auto pl-3 mt-2">
                    <span className="flex gap-1 items-center h-6">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </span>
                </div>
            )}

            {error && (
                <div className="flex items-center justify-between rounded-full max-w-[60%] p-2 bg-white shadow-sm border border-red-100">
                    <div className="text-red-600 px-4 py-2 text-sm">{error}</div>
                    <button
                        onClick={retry}
                        className="ml-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-slate-800 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            )}

            <div id="messages-end" />
        </div>
    );
}