'use client';

import { ReactNode, createContext } from "react";
import { useApplications } from "./modules/applications";

type AppContextType = {
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const { applications } = useApplications();
    return (
        <AppContext.Provider value={{
            applications
        }}>
            {children}
        </AppContext.Provider>
    );
}
