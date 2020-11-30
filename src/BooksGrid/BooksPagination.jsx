import React, { useMemo, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';

export const BooksPagination = ({ onChange }) => {
  const history = useHistory();
  const search = useLocation().search;
  const { count, itemsPerPage } = useSelector((state) => state.books);
  const page = useMemo(() => Number.parseInt(new URLSearchParams(search).get('page')) || 1, [search]);
  const lastPage = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    onChange(page);
  }, [page]);

  const handleChange = useCallback((event, value) => {
    history.push({ search: value > 1 ? `?page=${value}` : '' });
  }, []);

  return (
    <Pagination page={page} count={lastPage} variant="text" shape="rounded" onChange={handleChange}/>
  );
}
