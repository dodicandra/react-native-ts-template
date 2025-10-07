import {persistReducer} from '@/src/lib/storage/redux-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {storeKey} from '../../store-key';

const initialState = {
  count: 1,
};

const slice = createSlice({
  name: storeKey.COUNT,
  initialState,
  reducers: {
    increment: state => {
      state.count++;
    },
    decrement: state => {
      state.count--;
    },
    setCountByNumber: (state, {payload}: PayloadAction<number>) => {
      state.count = payload;
    },
  },
});

export const countAction = slice.actions;

export const countReducer = persistReducer({key: storeKey.COUNT}, slice.reducer);
