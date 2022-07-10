import { env } from '../config';
import axios from 'axios';
import store, { IImageItem, setImageResults, setLoading } from '../store';

export type IImageSearchResponse = {
  total: number;
  totalHits: number;
  hits: IImageItem[];
};

export const fetchImages = async (searchString: string) => {
  const url = `${env.baseUrl}/api/?key=${env.apiKey}&q=${encodeURIComponent(
    searchString.trim(),
  )}&image_type=photo`;

  try {
    store.dispatch(setLoading(true));
    const response = await axios.get<IImageSearchResponse>(url);
    store.dispatch(setImageResults(response.data));
  } catch (error) {
    //TODO: add error handling
  }
  store.dispatch(setLoading(false));
};
