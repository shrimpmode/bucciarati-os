import controlIcon from "./icons/controlc.svg";
import Image from "next/image";
import { FaBatteryFull, FaWifi, FaSearch } from "react-icons/fa";
export const StatusMenu = () => {
  return (
    <div className="flex gap-4 items-center">
      <FaBatteryFull className="text-lg" />
      <FaWifi className="text-lg" />
      <FaSearch />
      <Image src={controlIcon} alt="Control Icon" width={18} />
    </div>
  );
};
