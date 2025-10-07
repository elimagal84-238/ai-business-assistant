export default function SideMenu() {
  return (
    <div className="flex h-full flex-col gap-3">
      <h2 className="text-lg font-semibold">כלים</h2>
      <button className="rounded-xl2 border border-border px-3 py-2 hover:shadow-soft text-sm">
        חיפוש במסמכים
      </button>
      <button className="rounded-xl2 border border-border px-3 py-2 hover:shadow-soft text-sm">
        חיבור לג׳ימייל
      </button>
      <button className="rounded-xl2 border border-border px-3 py-2 hover:shadow-soft text-sm">
        אינדוקס ל-Meilisearch
      </button>
      <div className="mt-auto text-xs text-sub">גרסה: MVP</div>
    </div>
  );
}
