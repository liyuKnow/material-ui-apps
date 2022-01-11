import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
    },
});