import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        userId: null,
        isAuthenticated: false
    }, 

    reducers:{
        setCredentials: (state, action) => {
            const {token, userId} = action.payload
            state.token = token
            state.userId = userId
            state.isAuthenticated = !!token
        },
        logOut: (state) => {
            state.token = null
            state.userId = null
            state.isAuthenticated = false
        }
    }
})

export const {setCredentials, logOut} = AuthSlice.actions
export default AuthSlice.reducer;