import { configureStore } from "@reduxjs/toolkit";

import applicationReducer from "./features/application/applicationSlice";
import bootingReducer from "./features/booting/bootingSlice";
import notesReducer from "./features/notes/notesSlice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    booting: bootingReducer,
    notes: notesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
