import { DEFAULT_FETCH_BOOKS_PARAMS, fetchBooks } from '../../api/bookAPI';
import { toBookEntity } from '../../helpers/toBookEntity';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const IS_LOADING = 'IS_LOADING';

export const fetchBooksAction = (params) => (dispatch) => {
  dispatch({ type: IS_LOADING, payload: { isLoading: true } });
  const joinedParams = { ...DEFAULT_FETCH_BOOKS_PARAMS, ...params };

  return fetchBooks(joinedParams)
    .then(res => res.data)
    .then(({ books, count }) => {
      dispatch({
        type: FETCH_BOOKS,
        payload: { count, rows: books.map(toBookEntity), itemsPerPage: joinedParams.itemsPerPage }
      })
    })
    .catch(e => {
      console.error(e)
      dispatch({ type: IS_LOADING, payload: { isLoading: false } });
    });
}
