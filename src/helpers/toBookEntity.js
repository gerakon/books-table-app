export const toBookEntity = ({
   id,
   book_author,
   book_title,
   book_publication_year,
   book_publication_country,
   book_publication_city,
   book_pages
}) => ({
  id: id,
  bookAuthor: book_author,
  bookTitle: book_title,
  bookPublicationYear: book_publication_year,
  bookPublicationCountry: book_publication_country,
  bookPublicationCity: book_publication_city,
  bookPages: book_pages
})
