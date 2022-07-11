import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IImageSearchResponse } from '../../services';

export interface ImageItem {
  id: number;
  tags?: string;
  imageURL?: string;
  imageWidth: number;
  imageHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  user: string;
  userImageURL: string;
}

export interface ImageState extends IImageSearchResponse {
  page: number;
  searchTerm: string;
  loading: boolean;
  error: string;
}

const initialState: ImageState = {
  page: 1,
  searchTerm: '',
  hits: [],
  total: 0,
  totalHits: 0,
  loading: false,
  error: '',
};

const ImageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setError: (state: ImageState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state: ImageState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    resetPage: (state: ImageState) => {
      state.page = 1;
    },
    incrementPage: (state: ImageState) => {
      state.page = state.page + 1;
    },
    decrementPage: (state: ImageState) => {
      state.page = state.page - 1;
    },
    setImageResults: (
      state: ImageState,
      action: PayloadAction<
        IImageSearchResponse & { searchTerm: string; page: number }
      >,
    ) => {
      state.searchTerm = action.payload.searchTerm;
      state.page = action.payload.page;
      state.hits = action.payload.hits;
      state.total = action.payload.total;
      state.totalHits = action.payload.totalHits;
      state.error = '';
    },
    addImageResults: (
      state: ImageState,
      action: PayloadAction<
        IImageSearchResponse & { searchTerm: string; page: number }
      >,
    ) => {
      if (state.searchTerm === action.payload.searchTerm) {
        state.page = action.payload.page;
        state.hits = [...state.hits, ...action.payload.hits];
        state.total = action.payload.total;
        state.totalHits = action.payload.totalHits;
        state.error = '';
      }
    },
    clearImageSearch: (state: ImageState) => {
      state.page = 1;
      state.searchTerm = '';
      state.hits = [];
      state.total = 0;
      state.totalHits = 0;
      state.error = '';
    },
  },
});

export const {
  setLoading,
  setError,
  resetPage,
  incrementPage,
  decrementPage,
  setImageResults,
  addImageResults,
  clearImageSearch,
} = ImageSlice.actions;

export const { reducer: ImageSliceReducer } = ImageSlice;
