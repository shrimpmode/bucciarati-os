import {Application, AppMetadata} from "@/app/types/application";

export function createApplication(metadata: AppMetadata): Application {
  return {
    metadata,
    minimized: false,
  };
}
