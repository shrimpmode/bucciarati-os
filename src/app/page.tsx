import { Dock } from "./components/Dock/Dock";
import { MenuBar } from "./components/MenuBar/MenuBar";
import bg from './assets/bg.jpg'

export default function Home() {
  return (
    <main className="h-screen overflow-hidden system-bg bg-cover">
      <MenuBar />
      <Dock />
    </main>
  );
}
