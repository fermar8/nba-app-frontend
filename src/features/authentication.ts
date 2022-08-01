import { createSlice } from '@reduxjs/toolkit'

export interface authentication {
  isLoggedIn: boolean;
}

const initialState: authentication = {
  isLoggedIn: false
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginReducer: (state) => {
      state.isLoggedIn = true;
    },
    logoutReducer: (state) => {
      state.isLoggedIn = false;
    },
  },
})

export const { loginReducer, logoutReducer } = authenticationSlice.actions

export default authenticationSlice.reducer