import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface ComposerProps {
  value: string;
  onChange: (content: string) => void;
  onSend: (content: string) => void;
  model: string;
  onModelChange: (model: string) => void;
}

export default function Composer({
  value,
  onChange,
  onSend,
  model,
  onModelChange,
}: ComposerProps) {
  return (
    <div className="border-t border-[#2f2f2f] bg-[#212121] p-5">

      <div className="mx-auto flex max-w-4xl items-end rounded-3xl border border-[#3a3a3a] bg-[#2F2F2F] p-3 shadow-lg">

        <textarea
          value={value}
          rows={1}
          placeholder="Ask anything..."
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend(value);
            }
          }}
          className="max-h-40 flex-1 resize-none bg-transparent px-4 py-2 text-white outline-none placeholder:text-gray-400"
        />

        <select
          value={model}
          onChange={(e) => onModelChange(e.target.value)}
          className="mr-3 rounded-lg bg-[#404040] px-3 py-2 text-sm text-white outline-none"
        >
          <option value="llama-3.1-8b-instant">
            Llama 3.1 8B
          </option>

          <option value="llama-3.3-70b-versatile">
            Llama 3.3 70B
          </option>

          <option value="openai/gpt-oss-120b">
            GPT OSS 120B
          </option>
        </select>

        <button
          disabled={value.trim() === ""}
          onClick={() => onSend(value)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#10A37F] text-white transition hover:bg-[#0d8f70] disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          <HugeiconsIcon icon={ArrowUpRight01Icon} />
        </button>

      </div>

    </div>
  );
}