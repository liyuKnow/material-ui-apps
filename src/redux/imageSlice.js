import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    images: [],
}

export const userSlice = createSlice({
    name: "image",
    initialState: {
        value: initialStateValue,
    },
    reducers: {
        show: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;