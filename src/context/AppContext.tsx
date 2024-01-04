"use client";

import { ReactNode, createContext, useContext } from "react";
import { useApplications } from "./modules/applications";

type AppContextType = {
  applications: any
}

const AppContext = createContext<AppContextType>({applications: {}} as AppContextType);

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
