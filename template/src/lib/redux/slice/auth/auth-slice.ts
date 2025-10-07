import {persistReducer} from '@/src/lib/storage/redux-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {storeKey} from '../../store-key';

const initialState = {
  isLogin: false,
};

const slice = createSlice({
  name: storeKey.AUTH,
  initialState,
  reducers: {
    setLogin(state, {payload}: PayloadAction<boolean>) {
      state.isLogin = payload;
    },
  },
});

export const authAction = slice.actions;

export const authReducer = persistReducer({key: storeKey.AUTH}, slice.reducer);
