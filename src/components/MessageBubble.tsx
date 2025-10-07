export default function MessageBubble({
  role,
  text
}: {
  role: "user" | "assistant";
  text: string;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-xl2 border border-border px-3 py-2 shadow-soft whitespace-pre-wrap ${
          isUser ? "bg-[#eef2ff]" : "bg-white"
        }`}
      >
        <div className="text-xs text-sub mb-1">{isUser ? "אתה" : "עוזר"}</div>
        <div className="text-[15px] leading-relaxed">{text}</div>
      </div>
    </div>
  );
}
