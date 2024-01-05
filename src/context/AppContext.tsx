"use client";

import { ReactNode, createContext } from "react";
import { ApplicationModule, useApplications } from "./modules/applications";

type AppContextType = {
  applications: ApplicationModule;
};

const AppContext = createContext<AppContextType>({
  applications: {} as ApplicationModule,
} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { applications } = useApplications();

  return (
    <AppContext.Provider
      value={{
        applications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
