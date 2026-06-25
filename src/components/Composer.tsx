interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (

        <div className="flex items-center bg-slate-200 rounded-3xl px-4 mb-5"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full outline-none bg-transparent text-slate-900 placeholder:text-slate-500"
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
                className="ml-2 rounded-full bg-slate-800 px-6 py-2 text-white transition-colors hover:bg-slate-700 disabled:opacity-50"
            >    Send
            </button>
            
        </div>
    )

}