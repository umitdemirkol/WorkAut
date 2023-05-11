import { createSlice } from '@reduxjs/toolkit';

export const likeCounterSlice = createSlice({
  name: 'likeCounter',
  initialState: {
    value: 8,
  },
  reducers: {
    incrementLike: (state) => {
      state.value += 1;
    },
    decrementLike: (state) => {
      state.value -= 1;
    },
    incrementByAmountLike: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementLike, decrementLike, incrementByAmountLike } =
  likeCounterSlice.actions;

export default likeCounterSlice.reducer;
