import {createSlice} from "@reduxjs/toolkit";
import {usersDB} from "../usersDBFull";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: usersDB,
    },
    reducers: {
        addUser: (state) => {
             
        },
    },
});

export default usersSlice.reducer;
