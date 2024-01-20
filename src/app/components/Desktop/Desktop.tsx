"use client";

import { AppWindow } from "../Window/AppWindow";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { appComponentFactory } from "@/app/components/Desktop/appComponentFactory";
import { Application } from "@/app/types/application";

export const Desktop = () => {
  const applications = useSelector(
    (state: RootState) => state.application.applications,
  );

  const currentApplication = useSelector(
    (state: RootState) => state.application.currentApplication,
  );

  return (
    <div className="relative">
      {applications.map((app: Application) => {
        const component = appComponentFactory(app.metadata.name);
        const isAppActive =
          app.metadata.name === currentApplication?.metadata?.name;
        return (
          <AppWindow
            app={app}
            component={component}
            key={app.metadata.name}
            isAppActive={isAppActive}
          />
        );
      })}
    </div>
  );
};
