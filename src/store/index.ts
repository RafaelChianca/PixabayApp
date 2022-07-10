import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ImageSliceReducer } from './slices';

const reducers = combineReducers({
  image: ImageSliceReducer,
});

export type RootState = ReturnType<typeof reducers>;

export * from './slices';

const store = configureStore({
  reducer: reducers,
});

export default store;
