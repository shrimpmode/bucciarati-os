import {DateTime} from "@/app/components/MenuBar/DateTime";
import {StatusMenu} from "@/app/components/MenuBar/StatusMenu";
import {SystemMenu} from "@/app/components/MenuBar/SystemMenu";

export const MenuBar = () => {
    return (
        <div className="flex justify-between items-center p-1 bg-neutral-200">
            <div>
                <SystemMenu />
            </div>
            <div className="flex gap-2">
                <StatusMenu />
                <DateTime />
            </div>
        </div>
    )
}
