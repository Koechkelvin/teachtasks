import React, { useEffect, useState } from 'react';
import * as BooksAPI from '../APIbooks';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(setBooks);
  }, []);

  return (
    <div>
      <h1>My Bookshelf</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
