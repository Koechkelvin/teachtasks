// src/components/BookSearch.jsx
import React, { useState } from 'react';
import * as BooksAPI from '../APIbooks';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query) {
      BooksAPI.search(query).then((books) => {
        setResults(books || []);
      });
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Search Books</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search by title or author"
      />
      <ul>
        {results.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
