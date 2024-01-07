"use client";

import { apps } from "../applications/apps";
import { ApplicationIcon } from "./ApplicationIcon";
import {addApplication} from '@/store/features/application/applicationSlice'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from "@/store/store";
import {Application} from "@/app/types/application";

export const ApplicationsList = () => {
  const {applications} = useSelector((state:RootState) => state.application)
  const dispatch = useDispatch()
  return (
    <>
      {apps.map((app) => {
        const isRunning = applications.find((a:Application) => a.metadata.name === app.name);
        return (
          <div
              key={app.name}
            className="flex flex-col items-center gap-1"
          >
            <ApplicationIcon
              src={app.iconSrc}
              alt={app.name}
              onClick={() => {
                dispatch(addApplication(app));
              }}
            />
            {
                isRunning && <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
            }
          </div>
        );
      })}
    </>
  );
};
