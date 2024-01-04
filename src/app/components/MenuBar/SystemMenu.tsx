import Image from "next/image";
import systemIcon from "./icons/mac.png";
export const SystemMenu = () => {
  return (
    <div>
      <Image src={systemIcon} alt="system icon" width={18} />
    </div>
  );
};
