"use client";

import { useRef } from "react";
import { WindowTopBar } from "./WindowTopBar";
import { useDraggable } from "./useDraggable";

import {Application} from "@/app/types/application";

type WindowProps = {
  app: Application;
  component?: React.ReactNode
};

export const AppWindow = ({ app, component }: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const { position, onMouseDown } = useDraggable(windowRef);

  return component ? (
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
      <div className="w-full h-full">{component}</div>
    </div>
  ): null;
};
