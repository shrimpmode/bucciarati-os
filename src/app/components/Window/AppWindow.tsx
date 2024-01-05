"use client";

import { useRef } from "react";
import { WindowTopBar } from "./WindowTopBar";
import { useDraggable } from "./useDraggable";
import { Application } from "@/context/modules/Application";

type WindowProps = {
  app: Application;
};

export const AppWindow = ({ app }: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const { position, onMouseDown } = useDraggable(windowRef);

  const Component = app.metadata.Component;
  return (
    <div
      className="resize w-[800px] overflow-hidden absolute"
      style={{
        left: position.x,
        top: position.y,
        display: app.minimized ? "none" : "block",
      }}
      ref={windowRef}
    >
      <WindowTopBar onMouseDown={onMouseDown} app={app.metadata} />
      <div className="w-full h-full">{Component ? <Component /> : null}</div>
    </div>
  );
};
