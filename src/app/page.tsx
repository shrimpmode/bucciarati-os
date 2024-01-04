import { Dock } from "./components/Dock/Dock";
import { MenuBar } from "./components/MenuBar/MenuBar";
import bg from './assets/bg.jpg'
import { notes } from "./components/applications/Notes/metadata";

export default function Home() {
  const { Component } = notes;
  return (
    <main className="h-screen overflow-hidden system-bg bg-cover">
      <MenuBar />
      <div>
        <Component />
      </div>
      <Dock />

    </main>
  );
}
