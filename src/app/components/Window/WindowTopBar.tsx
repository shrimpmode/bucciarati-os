"use client";

import AppContext from "@/context/AppContext";
import { AppMetadata } from "../applications/types";
import { useContext } from "react";

type WindowTopBarProps = {
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  app: AppMetadata;
};
export const WindowTopBar = ({ onMouseDown, app }: WindowTopBarProps) => {
  const { applications } = useContext(AppContext);
  const handleClose = () => {
    applications.actions.removeApplication(app);
  };

  const handleMinimize = () => {
    applications.actions.minimizeApplication(app);
  };

  return (
    <div
      className="flex justify-between bg-neutral-200 w-full px-4 py-1 rounded-t-md "
      onMouseDown={onMouseDown}
    >
      <div className="flex gap-2">
        <div
          className="w-3 h-3 rounded-full bg-red-500"
          onClick={handleClose}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-yellow-500"
          onClick={handleMinimize}
        ></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};
