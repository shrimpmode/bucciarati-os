'use client'

type WindowTopBarProps = { 
    onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const WindowTopBar = ({onMouseDown}: WindowTopBarProps) => {
    return (
        <div className="flex justify-between bg-neutral-200 w-full px-4 py-1 rounded-t-md " onMouseDown={onMouseDown} >
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500">
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-500">
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500">
                </div>
            </div>
        </div>
    )
}
