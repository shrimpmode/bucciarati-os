import { Notes } from "@/app/components/applications/Notes/Notes";

import { AppMetadata } from "@/app/types/application";
import { Terminal } from "../applications/Terminal/Terminal";

export const appComponentFactory = (name: AppMetadata["name"]) => {
  switch (name) {
    case "Notes":
      return <Notes />;
    case "Terminal":
      return <Terminal />;
    default:
      return null;
  }
};
