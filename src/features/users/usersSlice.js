import { createSlice } from "@reduxjs/toolkit";
import { usersDB } from "../usersDBFull";

export const usersSlice = createSlice({
    name: "users",
    initialState: [
        {id:1, username:"Art", firstname:"Serge", lastname:"Artikhovich", year:1974 },
        {id:2, username:"Begenot",firstname:"Boris",lastname:"Beginner",year:1980},
        {id:3, username:"Dry",firstname:"Diana",lastname:"Dry",year:1996},
        {id:4, username:"Simaphore",firstname:"Pavel",lastname:"Smolar",year:1978}
    ],
    reducers: [],    
});
export const {addUser} = usersSlice.actions;
export default usersSlice.reducer
