import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PeriodState } from '../../types';

const initialState: PeriodState = {
  period: 7,
};

export const periodSlice = createSlice({
  name: 'period',
  initialState,

  reducers: {
    setPeriod: (state, action: PayloadAction<number>) => {
      state.period = action.payload;
    },
  },
});

export const { setPeriod } = periodSlice.actions;
