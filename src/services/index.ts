import { env } from '../config';
import axios, { AxiosError } from 'axios';
import store, {
  addImageResults,
  ImageItem,
  setError,
  setImageResults,
  setLoading,
} from '../store';

export type IImageSearchResponse = {
  total: number;
  totalHits: number;
  hits: ImageItem[];
};

export const fetchImages = async (
  searchTerm: string,
  page: number = 1,
  perPage: number = 20,
) => {
  const url = `${env.baseUrl}/api/?key=${env.apiKey}&q=${encodeURIComponent(
    searchTerm.trim(),
  )}&image_type=photo&page=${page}&per_page=${perPage}`;

  try {
    store.dispatch(setLoading(true));

    const response = await axios.get<IImageSearchResponse>(url);

    if (page === 1) {
      store.dispatch(setImageResults({ ...response.data, searchTerm, page }));
    } else {
      store.dispatch(addImageResults({ ...response.data, searchTerm, page }));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<any>;

      if (axiosError.response) {
        store.dispatch(setError(axiosError.response.statusText));
        if (__DEV__) {
          console.log(axiosError.response.data);
          console.log(axiosError.response.status);
          console.log(axiosError.response.headers);
        }
      } else if (axiosError.request) {
        store.dispatch(
          setError('The request was made but no response was received.'),
        );
        if (__DEV__) {
          console.log(axiosError.request);
        }
      } else {
        store.dispatch(setError(axiosError.message));
      }
    } else {
      if (error instanceof Error) {
        store.dispatch(setError(error.message));
      }
    }
  }

  store.dispatch(setLoading(false));
};
