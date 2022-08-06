import { createSlice } from '@reduxjs/toolkit'

export interface Authentication {
  isLoggedIn: boolean;
  user: User;
}

interface User {
  teams: string[];
  leagues: string[];
  name: string;
  email: string;
  _id: string;
  createdAt: string;
}

const initialState: Authentication = {
  isLoggedIn: false,
  user: {
    teams: [],
    leagues: [],
    name: "",
    email: "",
    _id: "",
    createdAt: ""
  }
}

export const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutReducer: (state) => {
      state.isLoggedIn = false;
    },
  },
})

export const { loginReducer, logoutReducer } = authenticationSlice.actions

export default authenticationSlice.reducer