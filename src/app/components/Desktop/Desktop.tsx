"use client";

import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { AppWindow } from "../Window/AppWindow";
import { Application } from "@/context/modules/Application";

export const Desktop = () => {
  const context = useContext(AppContext);
  return (
    <div className="relative">
      {context.applications.state.applications.map((app: Application) => {
        return <AppWindow app={app} key={app.metadata.name} />;
      })}
    </div>
  );
};
