'use client'

import { useRef } from "react"
import { AppMetadata } from "../applications/types"
import { WindowTopBar } from "./WindowTopBar"
import { useDraggable } from "./useDraggable"

type WindowProps = {
    app: AppMetadata
}

export const AppWindow = ({ app }: WindowProps) => {
    const windowRef = useRef<HTMLDivElement>(null)
    const {position, onMouseDown} = useDraggable(windowRef)

    const Component = app.Component
    return (
        <div className="resize w-[800px] overflow-hidden absolute" style={{
            left: position.x,
            top: position.y,
        }} ref={windowRef} >
            <WindowTopBar onMouseDown={onMouseDown} app={app}/>
            <div className="w-full h-full">
                {Component ? <Component /> : null}
            </div>
        </div>
    )
}
