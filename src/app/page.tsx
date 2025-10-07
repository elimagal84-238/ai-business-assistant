import SideMenu from "@/components/SideMenu";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  return (
    <main className="h-dvh w-full grid grid-cols-[1fr_320px] gap-4 p-4">
      <section className="bg-white rounded-xl shadow-soft border border-border flex flex-col">
        <ChatWindow />
      </section>
      <aside className="bg-white rounded-xl shadow-soft border border-border p-4">
        <SideMenu />
      </aside>
    </main>
  );
}
