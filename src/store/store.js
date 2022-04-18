import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import skillSlice from "../features/skill/skillSlice";
export const store = configureStore({
    reducer:{
        user:userSlice,
        skills:skillSlice
    }
})