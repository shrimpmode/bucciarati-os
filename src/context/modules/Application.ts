import { AppMetadata } from "@/app/components/applications/types";

export type Application = {
  metadata: AppMetadata;
  minimized: boolean;
};
function createApplication(metadata: AppMetadata): Application {
  return {
    metadata,
    minimized: false,
  };
}

function minimizeApplication(application: Application): Application {
  return {
    ...application,
    minimized: true,
  };
}

function maximizeApplication(application: Application): Application {
  return {
    ...application,
    minimized: false,
  };
}

export const applicationModule = {
  create: createApplication,
  minimize: minimizeApplication,
  maximize: maximizeApplication,
};
