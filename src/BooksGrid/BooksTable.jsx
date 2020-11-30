import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';

const Container = styled.div`
  position: relative;
  
  // I haven't used material-ui before. This is a quick solution to prevent the DataGrid size bug.
  & > * {
    height: auto !important;
    width: auto !important;
  }
`;

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'bookAuthor', headerName: 'Author', width: 150 },
  { field: 'bookTitle', headerName: 'Title', width: 500 },
  { field: 'bookPublicationYear', headerName: 'Publication Year' },
  { field: 'bookPublicationCountry', headerName: 'Publication Country' },
  { field: 'bookPublicationCity', headerName: 'Publication City' },
  { field: 'bookPages', headerName: 'Pages' },
];

export const BooksTable = () => {
  const { isLoading, rows } = useSelector((state) => state.books);

  return (
    <Container>
      <DataGrid rows={rows} columns={columns} autoHeight={true} hideFooter={true} rowHeight={36} loading={isLoading}/>
    </Container>
  );
}
