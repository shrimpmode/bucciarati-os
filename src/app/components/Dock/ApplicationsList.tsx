"use client";

import { ApplicationIcon } from "../applications/ApplicationIcon";
import {
  addApplication,
  setCurrentApplication,
} from "@/store/features/application/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Application } from "@/app/types/application";

export const ApplicationsList = () => {
  const { applications, commonApplications, recentApplications } = useSelector(
    (state: RootState) => state.application,
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex">
        {commonApplications.map((app) => {
          const isRunning = applications.find(
            (a: Application) => a.metadata.name === app.name,
          );
          return (
            <div key={app.name} className="flex flex-col items-center gap-1">
              <ApplicationIcon
                src={app.iconSrc}
                alt={app.name}
                onClick={() => {
                  dispatch(addApplication(app));
                  setCurrentApplication(app);
                }}
              />
              {isRunning && (
                <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>

      {/*divider*/}
      <div className="w-[1px] h-[48px] bg-neutral-500"></div>

      <div className="flex">
        {recentApplications.map((app) => {
          const isRunning = applications.find(
            (a: Application) => a.metadata.name === app.name,
          );
          return (
            <div key={app.name} className="flex flex-col items-center gap-1">
              <ApplicationIcon
                src={app.iconSrc}
                alt={app.name}
                onClick={() => {
                  dispatch(addApplication(app));
                }}
              />
              {isRunning && (
                <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
