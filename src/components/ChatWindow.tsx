"use client";
import { useState } from "react";
import MessageBubble from "@/components/MessageBubble";

type Msg = { role: "user" | "assistant"; text: string };

export default function ChatWindow() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "היי! במה נתחיל היום?" }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    // כאן בהמשך נחבר ל-API אמיתי / RAG
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "assistant", text: "קיבלתי. ממשיכים." }]);
    }, 300);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-auto p-4 flex flex-col gap-3">
        {msgs.map((m, i) => (
          <MessageBubble key={i} role={m.role} text={m.text} />
        ))}
      </div>

      <div className="border-t border-border p-3">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-xl2 border border-border px-3 py-2 outline-none"
            placeholder="כתוב הודעה…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button
            onClick={send}
            className="rounded-xl2 bg-ink text-white px-4 py-2 hover:shadow-soft"
          >
            שלח
          </button>
        </div>
      </div>
    </div>
  );
}
