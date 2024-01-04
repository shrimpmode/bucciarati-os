import { ApplicationsList } from "../applications/ApplicationsList";
import "./styles.css";

export const Dock = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 dock-container transition">
      <div className=" justify-center flex dock-apps">
        <div className="flex bg-neutral-800 bg-opacity-40 p-2 rounded-2xl mb-2 ">
          <ApplicationsList />
        </div>
      </div>
    </div>
  );
};
