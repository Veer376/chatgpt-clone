import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
    model: string;
    onModelChange: (model: string) => void;
}

export default function Composer({ value, onChange, onSend, model, onModelChange }: ComposerProps) {
    return (
        /* Added shadow-md and border for depth; gives the bar visual lift off the background */
        <div className="flex items-center bg-white rounded-full p-2 mx-4 mb-6 shadow-md border border-slate-200">
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Message ChatGPT"
                className="flex-1 pl-4 outline-none bg-transparent text-sm"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            />

            {/* Thin divider to visually separate the model selector from the input */}
            <span className="w-px h-5 bg-slate-200 mx-2" aria-hidden="true" />

            <select
                value={model}
                onChange={(e) => onModelChange(e.target.value)}
                className="outline-none bg-transparent text-slate-500 text-xs pr-2 cursor-pointer"
            >
                <option value="llama-3.1-8b-instant">Llama 3.1 8B</option>
                <option value="llama-3.3-70b-versatile">Llama 3.3 70B</option>
                <option value="openai/gpt-oss-120b">GPT-OSS 120B</option>
            </select>

            <button
                disabled={value.trim() === ''}
                onClick={() => onSend(value)}
                /* Added transition + hover:bg-slate-800 for a subtle interactive feel */
                className="ml-2 bg-black text-white disabled:opacity-30 disabled:cursor-not-allowed px-3 py-2 rounded-full transition-colors hover:bg-slate-800"
            >
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
            </button>
        </div>
    );
}