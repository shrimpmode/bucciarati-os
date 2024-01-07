import { Notes } from "@/app/components/applications/Notes/Notes";

import { AppMetadata } from "@/app/types/application";

export const appComponentFactory = (name: AppMetadata["name"]) => {
  switch (name) {
    case "Notes":
      return <Notes />;
    default:
      return null;
  }
};
