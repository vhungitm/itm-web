import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const notificationSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const selectAuth = (state: RootState) => state.auth;
export const authActions = notificationSlice.actions;

const authReducer = notificationSlice.reducer;
export default authReducer;
