"use client";

import { useRef } from "react";
import { WindowTopBar } from "./WindowTopBar";
import { useDraggable } from "./useDraggable";

import { Application } from "@/app/types/application";
import { useDispatch } from "react-redux";
import { setCurrentApplication } from "@/store/features/application/applicationSlice";

type WindowProps = {
  app: Application;
  component?: React.ReactNode;
  isAppActive?: boolean;
};

export const AppWindow = ({ app, component, isAppActive }: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const { position, onMouseDown } = useDraggable(windowRef);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentApplication(app.metadata));
  };

  console.log(windowRef.current?.clientHeight);

  return component ? (
    <div
      className="overflow-auto absolute border border-neutral-600 rounded-md"
      style={{
        left: position.x,
        top: position.y,
        display: app.minimized ? "none" : "block",
        zIndex: isAppActive ? 100 : 0,
      }}
      ref={windowRef}
      onClick={handleClick}
    >
      <WindowTopBar onMouseDown={onMouseDown} app={app.metadata} />
      <div
        className="overflow-hidden"
        style={
          {
            // height: windowRef.current?.clientHeight ? windowRef.current?.clientHeight - 30 : 0
          }
        }
      >
        {component}
      </div>
    </div>
  ) : null;
};
