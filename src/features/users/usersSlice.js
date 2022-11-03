import { createSlice } from "@reduxjs/toolkit";
import { usersDB } from "../usersDBFull";

export const usersSlice = createSlice({
    name: "users",
    initialState: usersDB,
    reducers: {
        incYearUser(state,action) {
            const userID = action.payload
            const user = state.find((todo) => user.id === userID)
            if (user) {
                user.year += user.year
            }
        }
    },
        toggleUser(state, action) {
            const userID = action.payload
        
    },    
});

export const {addUser} = usersSlice.actions;
export default usersSlice.reducer
