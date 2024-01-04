'use client'

import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { AppMetadata } from "../applications/types";
import { AppWindow } from "../Window/AppWindow";

export const Desktop = () => {

    const context = useContext(AppContext);
    return (
        <div className="relative">
            {
                context.applications.state.applications.map((app: AppMetadata) => {
                    return (
                        <AppWindow app={app} key={app.name}/>
                    )
                })
            }

        </div>
    )
}
