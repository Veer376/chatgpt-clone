interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (

        <div className="mx-4 mb-5 flex items-center rounded-2xl border border-slate-300 bg-slate-100 px-4 py-2 shadow-md transition-shadow focus-within:shadow-lg"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
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
                className="ml-3 rounded-xl bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >    Send
            </button>
            
        </div>
    )

}