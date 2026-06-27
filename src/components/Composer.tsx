interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (
            <div className="mx-auto mb-6 flex w-[90%] max-w-4xl items-center rounded-3xl border border-slate-700 bg-slate-800 px-5 py-3 shadow-lg">
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Message ChatGPT..."
                className="flex-1 bg-transparent py-2 text-white outline-none placeholder:text-slate-400"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            >
            </input>

            <button 
                disabled={value.trim() === ""}
                onClick={() => onSend(value)}
                className="ml-3 rounded-full bg-emerald-500 px-5 py-2 font-medium text-white transition-all duration-200 hover:bg-emerald-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Send
            </button>
            
        </div>
    )

}