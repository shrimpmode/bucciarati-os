'use client'

import AppContext from "@/context/AppContext";
import { useContext } from "react";
import { AppMetadata } from "../applications/types";

export const Desktop = () => {

    const context = useContext(AppContext);
    return (
        <div>
            {
                context.applications.state.applications.map((app: AppMetadata) => {
                    const Component = app.Component
                    return Component ? <Component key={app.name} /> : null
                })
            }

        </div>
    )
}
