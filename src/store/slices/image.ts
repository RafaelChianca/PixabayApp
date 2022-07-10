import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImageSearchResponse } from '../../services';

export interface IImageItem {
  id: number;
  tags?: string;
  imageURL?: string;
  width?: number;
  height?: number;
  webformatURL: string;
  webformatHeight: number;
  webformatWidth: number;
  user: string;
  userImageURL: string;
}

export interface IImageState extends IImageSearchResponse {
  loading: boolean;
  error: boolean;
}

const initialState: IImageState = {
  hits: [],
  total: 0,
  totalHits: 0,
  loading: false,
  error: false,
};

const ImageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setLoading: (state: IImageState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setImageResults: (
      state: IImageState,
      action: PayloadAction<IImageSearchResponse>,
    ) => {
      state.hits = action.payload.hits;
      state.total = action.payload.total;
      state.totalHits = action.payload.totalHits;
    },
    clearImageSearch: (state: IImageState) => {
      state.hits = [];
      state.total = 0;
      state.totalHits = 0;
    },
  },
});

export const { setLoading, setImageResults, clearImageSearch } =
  ImageSlice.actions;

export const { reducer: ImageSliceReducer } = ImageSlice;
