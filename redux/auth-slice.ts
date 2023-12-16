import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: true
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      return state;
    }
  }
});

export const selectAuth = (state: RootState) => state.auth;
export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
