"use client";

import { apps } from "../applications/apps";
import { ApplicationIcon } from "./ApplicationIcon";
import {addApplication} from '@/store/features/application/applicationSlice'
import {useDispatch} from 'react-redux'

export const ApplicationsList = () => {
  const dispatch = useDispatch()
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
                dispatch(addApplication(app));
              }}
            />

            <div className="w-1 h-1 bg-neutral-50 rounded-full"></div>
          </div>
        );
      })}
    </>
  );
};
