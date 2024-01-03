import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from './store';

const initialState = {
  user: null,
  isLoading: true
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;

      if (user) {
        Cookies.set('token', user.token);
        delete user.token;
        localStorage.setItem('user', JSON.stringify({ ...user }));
      } else {
        Cookies.remove('token');
        localStorage.removeItem('user');
      }
      return state;
    }
  }
});

export const selectAuth = (state: RootState) => state.auth;
export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
