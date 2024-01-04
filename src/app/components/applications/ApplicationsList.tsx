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
          <ApplicationIcon
            src={app.iconSrc}
            alt={app.name}
            key={app.name}
            onClick={() => {
              applications.actions.addApplication(app);
            }}
          />
        );
      })}
    </>
  );
};
