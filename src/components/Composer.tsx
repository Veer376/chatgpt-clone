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

        <div className="flex items-center bg-gray-100 rounded-2xl shadow-lg p-3 mx-4 mb-6 border border-gray-300"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 pl-4 py-2 outline-none bg-transparent text-gray-800 placeholder-gray-500"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            >
            </input>

            <select
                aria-label="Model selection"
                value={model}
                onChange={(e: any) => onModelChange(e.target.value)}
                className="outline-none bg-white border-gray-300 rounded-lg px-2 py-1 text-black mx-2"
            >
                <option> llama-3.1-8b-instant </option>
                <option> llama-3.3-70b-versatile </option>
                <option> openai/gpt-oss-120b </option>

            </select>


            <button
                type="button"
                disabled={value.trim() === ""}
                onClick={() => onSend(value)}
                aria-label="Send message"
                className="ml-2 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-full transition-all duration-200"
            >
                <HugeiconsIcon icon={ArrowUpRight01Icon} />
            </button>
            
        </div>
    )

}