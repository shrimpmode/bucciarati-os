import { DateTime } from "@/app/components/MenuBar/DateTime";
import { StatusMenu } from "@/app/components/MenuBar/StatusMenu";
import { SystemMenu } from "@/app/components/MenuBar/SystemMenu";

export const MenuBar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-4 bg-neutral-200 text-sm">
      <div>
        <SystemMenu />
      </div>
      <div className="flex gap-4 items-center">
        <StatusMenu />
        <DateTime />
      </div>
    </div>
  );
};
