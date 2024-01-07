"use client";
import { Dock } from "./components/Dock/Dock";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { Desktop } from "./components/Desktop/Desktop";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BootingScreen } from "@/app/components/Boot/BottingScreen";
import { AppStatus } from "@/store/features/booting/bootingSlice";

export default function Home() {
  const { appStatus } = useSelector((state: RootState) => state.booting);
  let content;

  switch (appStatus) {
    case AppStatus.BOOTING:
      content = <BootingScreen />;
      break;
    case AppStatus.RUNNING:
      content = (
        <>
          <MenuBar />
          <Desktop />
          <Dock />
        </>
      );
      break;
    case AppStatus.SHUTTING_DOWN:
      content = <> shutting down</>;
      break;
    default:
      content = <>default</>;
  }

  return (
    <main className="h-screen overflow-hidden system-bg bg-cover">
      {content}
    </main>
  );
}
