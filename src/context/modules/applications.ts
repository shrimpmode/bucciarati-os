import { AppMetadata } from "@/app/components/applications/types";
import { useReducer } from "react";

enum ActionTypes {
  ADD_APPLICATION = "ADD_APPLICATION",
  REMOVE_APPLICATION = "REMOVE_APPLICATION",
}

type Action = {
  type: ActionTypes;
  payload: AppMetadata;
};

type State = {
  applications: AppMetadata[];
};

const initialState = {
  applications: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_APPLICATION:
      return {
        ...state,
        applications: [...state.applications, action.payload],
      };
    case ActionTypes.REMOVE_APPLICATION:
      return {
        ...state,
        applications: state.applications.filter(
          (app: AppMetadata) => app.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};

export const useApplications = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addApplication = (application: any) => {
    if (!state.applications.find((app: any) => app.name === application.name))
      dispatch({
        type: ActionTypes.ADD_APPLICATION,
        payload: application,
      });
  };

  const removeApplication = (application: any) => {
    if (state.applications.find((app: any) => app.name === application.name))
      dispatch({
        type: ActionTypes.REMOVE_APPLICATION,
        payload: application,
      });
  };

  return {
    applications: {
      state,
      actions: {
        addApplication,
        removeApplication,
      },
    },
  };
};
