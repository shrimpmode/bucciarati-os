"use client";

import { useContext } from "react";
import { apps } from "../applications/apps";
import { ApplicationIcon } from "./ApplicationIcon";
import AppContext from "@/context/AppContext";

export const ApplicationsList = () => {
  const { applications } = useContext(AppContext);

  return (
    <>
      {apps.map((app) => {
        return (
          <div
              key={app.name}
            className="flex flex-col items-center gap-1"
          >
            <ApplicationIcon
              src={app.iconSrc}
              alt={app.name}
              onClick={() => {
                applications.actions.addApplication(app);
              }}
            />

            <div className="w-1 h-1 bg-neutral-50 rounded-full"></div>
          </div>
        );
      })}
    </>
  );
};
