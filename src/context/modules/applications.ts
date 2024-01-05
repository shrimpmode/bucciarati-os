import { AppMetadata } from "@/app/components/applications/types";
import { useReducer } from "react";
import { Application, applicationModule } from "./Application";

enum ActionTypes {
  ADD_APPLICATION = "ADD_APPLICATION",
  REMOVE_APPLICATION = "REMOVE_APPLICATION",
  MINIMIZE_APPLICATION = "MINIMIZE_APPLICATION",
  MAXIMIZE_APPLICATION = "MAXIMIZE_APPLICATION",
}

type Action = {
  type: ActionTypes;
  payload: AppMetadata;
};

type State = {
  applications: Application[];
};

export type ApplicationModule = {
  state: State;
  actions: {
    addApplication: (application: AppMetadata) => void;
    removeApplication: (application: AppMetadata) => void;
    minimizeApplication: (application: AppMetadata) => void;
  };
};

const initialState: State = {
  applications: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_APPLICATION:
      const application = applicationModule.create(action.payload);
      return {
        ...state,
        applications: [...state.applications, application],
      };
    case ActionTypes.REMOVE_APPLICATION:
      return {
        ...state,
        applications: state.applications.filter(
          (app: Application) => app.metadata.name !== action.payload.name,
        ),
      };
    case ActionTypes.MINIMIZE_APPLICATION:
      return {
        ...state,
        applications: state.applications.map((app: Application) => {
          if (app.metadata.name === action.payload.name) {
            return applicationModule.minimize(app);
          }
          return app;
        }),
      };

    case ActionTypes.MAXIMIZE_APPLICATION:
      return {
        ...state,
        applications: state.applications.map((app: Application) => {
          if (app.metadata.name === action.payload.name) {
            return applicationModule.maximize(app);
          }
          return app;
        }),
      };
    default:
      return state;
  }
};

export const useApplications = () => {
  const [state, dispatch] = useReducer<State, Action>(reducer, initialState);

  const addApplication = (application: AppMetadata) => {
    if (
      !state.applications.find(
        (app: Application) => app.metadata.name === application.name,
      )
    )
      dispatch({
        type: ActionTypes.ADD_APPLICATION,
        payload: application,
      });
    else {
      dispatch({
        type: ActionTypes.MAXIMIZE_APPLICATION,
        payload: application,
      });
    }
  };

  const removeApplication = (application: AppMetadata) => {
    if (
      state.applications.find(
        (app: Application) => app.metadata.name === application.name,
      )
    )
      dispatch({
        type: ActionTypes.REMOVE_APPLICATION,
        payload: application,
      });
  };

  const minimizeApplication = (application: AppMetadata) => {
    if (
      state.applications.find(
        (app: Application) => app.metadata.name === application.name,
      )
    )
      dispatch({
        type: ActionTypes.MINIMIZE_APPLICATION,
        payload: application,
      });
  };

  const applications: ApplicationModule = {
    state,
    actions: {
      addApplication,
      removeApplication,
      minimizeApplication,
    },
  };
  return {
    applications,
  };
};
