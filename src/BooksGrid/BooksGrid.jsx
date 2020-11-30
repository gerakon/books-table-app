import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchBooksAction } from '../store/actions/books';
import { BooksTable } from './BooksTable';
import { BooksPagination } from './BooksPagination';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const BooksGrid = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback((page) => {
    dispatch(fetchBooksAction({ page }));
  }, []);

  return (
    <>
      <BooksTable/>
      <PaginationContainer>
        <BooksPagination onChange={handleChange}/>
      </PaginationContainer>
    </>
  );
}
