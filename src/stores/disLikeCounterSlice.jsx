import { createSlice } from '@reduxjs/toolkit';

export const disLikeCounterSlice = createSlice({
  name: 'disLikeCounter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementDisLike: (state) => {
      state.value += 1;
    },
    decrementDisLike: (state) => {
      state.value -= 1;
    },
    incrementByAmountDisLike: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementDisLike, decrementDisLike, incrementByAmountDisLike } =
  disLikeCounterSlice.actions;

export default disLikeCounterSlice.reducer;
