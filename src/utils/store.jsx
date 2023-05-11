import { configureStore } from '@reduxjs/toolkit';
import likeCounterSliceReducer from '@/stores/likeCounterSlice';
import disLikeCounterSliceReducer from '@/stores/disLikeCounterSlice';

export default configureStore({
  reducer: {
    likeCounter: likeCounterSliceReducer,
    disLikeCounter: disLikeCounterSliceReducer,
  },
});
