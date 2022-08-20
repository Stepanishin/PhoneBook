import { createSlice } from "@reduxjs/toolkit";

type DefaultLoginStateType = {
    isUser: boolean
}

const initialState : DefaultLoginStateType = {
    isUser: false,
}

export const userLoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
            userAccess(state) {
                state.isUser = !state.isUser
            },
        },
})

export default userLoginSlice.reducer