import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AppStatus {
  BOOTING,
  RUNNING,
  SHUTTING_DOWN,
  DEFAULT,
}
export interface BootingState {
  appStatus: AppStatus;
}

const initialState: BootingState = {
  appStatus: AppStatus.BOOTING,
};

export const bootingSlice = createSlice({
  name: "booting",
  initialState,
  reducers: {
    setAppStatus: (state, action: PayloadAction<AppStatus>) => {
      state.appStatus = action.payload;
    },
  },
});

export const { setAppStatus } = bootingSlice.actions;

export default bootingSlice.reducer;
