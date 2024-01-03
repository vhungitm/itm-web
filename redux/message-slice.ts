import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NoticeType } from 'antd/es/message/interface';
import { ReactNode } from 'react';
import { RootState } from './store';

export interface IMessage {
  type: NoticeType;
  content: ReactNode;
  duration?: number | 1;
}

const initialState: IMessage = {
  type: 'success',
  content: ''
};

const messageSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<IMessage>) => {
      state = action.payload;
      return state;
    }
  }
});

export const selectMessage = (state: RootState) => state.message;
export const messageActions = messageSlice.actions;

const messageReducer = messageSlice.reducer;
export default messageReducer;
