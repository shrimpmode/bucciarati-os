import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createApplication } from "@/store/features/application/Application";
import { Application, AppMetadata } from "@/app/types/application";
import { commonApps } from "@/constants/applications/commonApps";
import { recentApps } from "@/constants/applications/recentApps";

export interface CounterState {
  value: number;
  applications: Application[];
  recentApplications: AppMetadata[];
  commonApplications: AppMetadata[];
}

const initialState: CounterState = {
  value: 69,
  applications: [],
  recentApplications: recentApps,
  commonApplications: commonApps
  ,
};

export const applicationsSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<AppMetadata>) => {
      if (
        !state.applications.find(
          (app) => app.metadata.name === action.payload.name,
        )
      )
        state.applications.push(createApplication(action.payload));
      else {
        const app = state.applications.find(
          (app) => app.metadata.name === action.payload.name,
        );
        if (app) {
          app.minimized = false;
        }
      }
    },
    minimizeApplication: (state, action: PayloadAction<AppMetadata>) => {
      const app = state.applications.find(
        (app) => app.metadata.name === action.payload.name,
      );
      if (app) {
        app.minimized = true;
      }
    },
    removeApplication: (state, action: PayloadAction<AppMetadata>) => {
      state.applications = state.applications.filter(
        (app) => app.metadata.name !== action.payload.name,
      );
    },
  },
});

export const { addApplication, minimizeApplication, removeApplication } =
  applicationsSlice.actions;

export default applicationsSlice.reducer;
