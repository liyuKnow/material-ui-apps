import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "search",
    initialState: {
        searchText: "cat",
        amount: 15,
    },
    reducers: {
        show: (state, action) => {
            state.searchText = action.payload.searchText;
            state.amount = action.payload.amount;
        },
    }
});

export const { show } = userSlice.actions;

export default userSlice.reducer;