import React from 'react';
import './App.css';
import BookList from './components/bookslists';
import BookSearch from './components/booksearch';

const App = () => {
  return (
    <div className="App">
      <BookList />
      <BookSearch />
    </div>
  );
};

export default App;
