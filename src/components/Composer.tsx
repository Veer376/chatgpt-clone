import { ArrowUp01Icon } from '@hugeicons/core-free-icons';
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
        // Warm cream surface with a soft peach focus ring on the pill bar
        <div className="flex items-center gap-2 bg-[#FFFDFA] rounded-full pl-5 pr-2 py-2 mx-4 mb-6 border-[1.5px] border-[#F0DFC8] shadow-[0_2px_8px_rgba(217,119,87,0.08)] focus-within:border-[#E8916B] focus-within:ring-4 focus-within:ring-[#FBEAE0] transition-all">
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-w-0 outline-none bg-transparent text-[15px] text-[#5C4A3A] placeholder:text-[#C9B8A8]"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            />

            {/* Pastel amber pill so the model picker reads as a tag, not stray text */}
            <select
                value={model}
                onChange={(e: any) => onModelChange(e.target.value)}
                className="outline-none bg-[#FBEAE0] text-[#B3552E] text-xs font-medium rounded-full px-3 py-1.5 max-w-[150px] truncate cursor-pointer hover:bg-[#F5DCC8] transition-colors"
            >
                <option value="llama-3.1-8b-instant">llama-3.1-8b-instant</option>
                <option value="llama-3.3-70b-versatile">llama-3.3-70b-versatile</option>
                <option value="openai/gpt-oss-120b">gpt-oss-120b</option>
            </select>

            <button
                disabled={value.trim() === ""}
                onClick={() => onSend(value)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E8916B] text-white disabled:bg-[#F0C4AC] disabled:cursor-not-allowed hover:bg-[#D9784E] active:scale-95 transition-all shrink-0"
            >
                <HugeiconsIcon icon={ArrowUp01Icon} size={17} strokeWidth={2.4} />
            </button>
        </div>
    )
}