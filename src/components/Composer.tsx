interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (

        <div className="flex items-center gap-3 bg-white-800 rounded-xl p-3 mx-4 mb-4"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="📝How Can I Help You..."
                className="bg-zinc-800 text-white broder-slate-600 rounded-lg px-4 py-3"
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
                className="rounded-lg px-4 py-2 bg-slate-500 text-black hover:bg-cyan-600"
            >
                🔝Send
            </button>
            
        </div>
    )

}