import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
  },
});

export default store;

export const server = "https://learnify-vd2o.onrender.com/api/v1";
