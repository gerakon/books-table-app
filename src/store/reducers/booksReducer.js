import { FETCH_BOOKS, IS_LOADING } from '../actions/books';

const initState = {
  count: 0,
  isLoading: false,
  itemsPerPage: 0,
  rows: [],
};

export const booksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return { ...state, ...payload, isLoading: false };
    case IS_LOADING:
      return { ...state, isLoading: payload.isLoading };
    default:
      return state;
  }
}
