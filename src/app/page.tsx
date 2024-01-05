import { Dock } from "./components/Dock/Dock";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { Desktop } from "./components/Desktop/Desktop";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden system-bg bg-cover">
      <MenuBar />
      <Desktop />
      <Dock />
    </main>
  );
}
