import axios from 'axios';
import { API_URL } from './consts';

export const DEFAULT_FETCH_BOOKS_PARAMS = Object.freeze({ page: 1, itemsPerPage: 20, filters: [] });

export const fetchBooks = async (params = DEFAULT_FETCH_BOOKS_PARAMS) =>
  axios.post(`${API_URL}/books`, params);
