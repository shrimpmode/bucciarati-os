"use client";

import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { AppWindow } from "../Window/AppWindow";
import { Application } from "@/context/modules/Application";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Desktop = () => {
  const context = useContext(AppContext);
  const count = useSelector((state: RootState) => state.application.value);

  return (
    <div className="relative">
      <div>
        <h1>Count: {count}</h1>
      </div>
      {context.applications.state.applications.map((app: Application) => {
        return <AppWindow app={app} key={app.metadata.name} />;
      })}
    </div>
  );
};
